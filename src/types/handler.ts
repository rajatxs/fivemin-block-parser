export interface HeaderData {
   text: string
   level: number
}

export interface ParagraphData {
   text: string
}

export interface ListData {
   type?: string
   style?: string
   items: string[]
}

export interface ImageData {
   caption: string
   withBorder: boolean
   withBackground: boolean
   stretched: boolean
   file: {
      url: string
   }
}

export interface TableData {
   withHeadings: boolean
   content: string[][]
}

export interface CodeData {
   code: string
}

export interface WarningData {
   title: string
   message: string
}
