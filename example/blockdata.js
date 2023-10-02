module.exports = {
   time: 1696005364851,
   blocks: [
      {
         id: 'mhTl6ghSkV',
         type: 'paragraph',
         data: {
            text: 'Hey. Meet the new Editor. On this picture you can see it in action. Then, try a demo 🤓',
         },
      },
      {
         id: 'l98dyx3yjb',
         type: 'header',
         data: {
            text: 'Key features',
            level: 3,
         },
      },
      {
         id: 'os_YI4eub4',
         type: 'list',
         data: {
            type: 'unordered',
            items: [
               'It is a block-style editor',
               'It returns clean data output in JSON',
               'Designed to be extendable and pluggable with a <a href="https://editorjs.io/creating-a-block-tool">simple API</a>',
            ],
         },
      },
      {
         id: '1yKeXKxN7-',
         type: 'header',
         data: {
            text: 'What does it mean block-styled editor',
            level: 3,
         },
      },
      {
         id: 'TcUNySG15P',
         type: 'paragraph',
         data: {
            text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc. Each of them is an independent <sup data-tune="footnotes">1</sup> contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
         },
         tunes: {
            footnotes: [
               'It works more stable then in other WYSIWYG editors. Same time it has smooth and well-known arrow navigation behavior like classic editors.',
            ],
         },
      },
      {
         id: 'M3UXyblhAo',
         type: 'header',
         data: {
            text: 'What does it mean clean data output?',
            level: 3,
         },
      },
      {
         id: 'KOcIofZ3Z1',
         type: 'paragraph',
         data: {
            text: 'There are dozens of ready-to-use Blocks and a simple API <sup data-tune="footnotes">2</sup> for creating any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA buttons, and even games.',
         },
         tunes: {
            footnotes: ["Just take a look at our Creating Block Tool guide. You'll be surprised."],
         },
      },
      {
         id: 'ksCokKAhQw',
         type: 'paragraph',
         data: {
            text: 'Classic WYSIWYG editors produce raw HTML-markup with both content data and content appearance. On the contrary, <mark class="cdx- marker">Editor.js outputs JSON object</mark> with data of each Block.',
         },
      },
      {
         id: '7RosVX2kcH',
         type: 'paragraph',
         data: {
            text: 'Given data can be used as you want: render with HTML for Web clients, render natively for mobile apps, create the markup for Facebook Instant Articles or Google AMP, generate an audio version, and so on.',
         },
      },
      {
         id: 'eq06PsNsab',
         type: 'paragraph',
         data: {
            text: 'Clean data is useful to sanitize, validate and process on the backend.',
         },
      },
      {
         id: 'hZAjSnqYMX',
         type: 'image',
         data: {
            file: {
               url: 'https://fastly.picsum.photos/id/136/1000/800.jpg?hmac=Qy6VzL5PPZbxTQR8SZAffdERE5Q7arAG3-nTK64DQlQ',
            },
            withBorder: false,
            withBackground: false,
            stretched: true,
            caption: 'Picsum Photo;Lorem Picsum;https://picsum.photos',
         },
      },
      {
         id: 'eCgs3As6dfg',
         type: 'table',
         data: {
            withHeadings: true,
            content: [
               ['Company', 'Contact', 'Country'],
               ['Alfreds Futterkiste', 'Maria Anders', 'Germany'],
               ['Centro comercial Moctezuma', 'Francisco Chang', 'Mexico'],
               ['Ernst Handel', 'Roland Mendel', 'Austria'],
               ['Island Trading', 'Helen Bennett', 'UK'],
               ['Laughing Bacchus Winecellars', 'Yoshi Tannamuri', 'Canada'],
               ['Magazzini Alimentari Riuniti', 'Giovanni Rovelli', 'Italy'],
            ],
         },
      },
      {
         id: '5cfgjss6d',
         type: 'code',
         data: {
            code: 'body {\n font-size: 14px;\n line-height: 16px;\n}',
         },
      },
      {
         id: '6vbjf5s467',
         type: 'warning',
         data: {
            title: 'Note:',
            message:
               'Avoid using this method just for lulz. It can be very dangerous opposite your daily fun stuff.',
         },
      },
   ],
}
