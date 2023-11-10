import type { Handler } from './types'
import type {
   HeaderData,
   ParagraphData,
   ListData,
   ImageData,
   TableData,
   CodeData,
   WarningData,
} from './types/handler'

/**
 * Parses "header" block and produce HTML heading tags
 * @param block - Block item
 */
export const headerHandler: Handler<HeaderData> = ({ data, id }): string => {
   const text = data.text
   let uid = `block-${id}`
   let html: string

   switch (data.level) {
      case 1:
         html = `<h1 id="${uid}" class="content__header content__header_h1">${text}</h1>`
         break
      default:
      case 2:
         html = `<h2 id="${uid}" class="content__header content__header_h2">${text}</h2>`
         break
      case 3:
         html = `<h3 id="${uid}" class="content__header content__header_h3">${text}</h3>`
         break
      case 4:
         html = `<h4 id="${uid}" class="content__header content__header_h4">${text}</h4>`
         break
      case 5:
         html = `<h5 id="${uid}" class="content__header content__header_h5">${text}</h5>`
         break
      case 6:
         html = `<h6 id="${uid}" class="content__header content__header_h6">${text}</h6>`
         break
   }

   return html
}

/**
 * Parses "paragraph" block and produce HTML <p> tag
 * @param block - Block item
 */
export const paragraphHandler: Handler<ParagraphData> = ({ data, id }): string => {
   const uid = `block-${id}`

   return `<p id="${uid}" class="content__paragraph">${data.text}</p>`
}

/**
 * Parses "list" block and produce HTML <ol> or <ul> tags
 * @param block - Block item
 */
export const listHandler: Handler<ListData> = ({ data, id }): string => {
   const uid = `block-${id}`
   const type = data.style || data.type
   let html = ''

   // insert list elements
   for (const item of data.items) {
      html += `\t<li class="content__list_item">${item}</li>\n`
   }

   // insert list root element
   if (type === 'unordered') {
      html = `<ul id="${uid}" class="content__list content__list_ul">\n${html}</ul>`
   } else {
      html = `<ol id="${uid}" class="content__list content__list_ol">\n${html}</ol>`
   }

   return html
}

/**
 * Parses "image" block and produce HTML <figure> tag
 * @param block - Block item
 */
export const imageHandler: Handler<ImageData> = ({ data, id }): string => {
   const uid = `block-${id}`
   const [caption = '', refName = '', refUrl = ''] = data.caption
      .split(';')
      .map((text) => text.trim())
   let html = ''

   // insert image element
   html += `\t<img src="${data.file.url}" alt="${caption || refName}" class="content__image" width="100%" height="auto" />\n`

   // insert image caption
   if (caption.length > 0) {
      html += `\t<figcaption class="content__image_caption">${caption}</figcaption>`
   }

   // insert image reference badge
   if (refName.length > 0 && refUrl.length > 0) {
      html += `\n\t<a rel="nofollow" href="${refUrl}" target="_blank" aria-hidden="true" tabindex="-1" class="content__image_ref"><small>${refName}</small></a>`
   }

   // insert root element
   html = `<figure id="${uid}" class="content__image_block">\n${html}\n</figure>`

   return html
}

/**
 * Parses "table" block and produce HTML <table> tag
 * @param block - Block item
 */
export const tableHandler: Handler<TableData> = ({ data, id }): string => {
   const uid = `block-${id}`
   let headingRows: string[] = []
   let dataRows: string[][] = []
   let thead = '',
      tbody = ''
   let html = ''

   if (data.withHeadings) {
      headingRows = data.content[0]
      dataRows = data.content.slice(1, data.content.length)
   } else {
      dataRows = data.content
   }

   // insert table header section
   if (headingRows.length > 0) {
      let th = ''

      for (const headingName of headingRows) {
         th += `\t\t\t<th class="content__table_head_cell">${headingName}</th>\n`
      }

      thead = `\t\t<tr class="content__table_head_row">\n${th}\t\t</tr>\n`
      html += `\t<thead class="content__table_head">\n${thead}\t</thead>\n`
   }

   // insert table body section
   if (dataRows.length > 0) {
      for (const row of dataRows) {
         let td = ''

         for (const rowValue of row) {
            td += `\t\t\t<td class="content__table_body_cell">${rowValue}</td>\n`
         }

         tbody += `\t\t<tr class="content__table_body_row">\n${td}\t\t</tr>\n`
      }

      html += `\t<tbody class="content__table_body">\n${tbody}\t</tbody>`
   }

   html = `<table id="${uid}" class="content__table">\n${html}\n</table>`
   return html
}

/**
 * Parses "code" block and produce HTML <div> code block
 * @param block - Block item
 */
export const codeHandler: Handler<CodeData> = ({ data, id }): string => {
   const uid = `block-${id}`
   const { mode = 'text' } = data
   let html = ''

   // insert <pre> element
   html += `<pre class="content__code">${data.code}</pre>`

   // insert container
   html = `<div id="${uid}" data-code-mode="${mode}" class="content__code_block">\n${html}\n</div>`

   return html
}

/**
 * Parses "warning" block and produce HTML <div> code block
 * @param block - Block item
 */
export const warningHandler: Handler<WarningData> = ({ data, id }): string => {
   const uid = `block-${id}`
   let html = ''

   // insert title element
   html += `\t<div class="content__warn_title"><strong>${data.title}</strong></div>\n`

   // insert message element
   html += `\t<p class="content__warn_message">${data.message}</p>`

   // insert warn container
   html = `<div id="${uid}" class="content__warn">\n${html}\n</div>`
   return html
}
