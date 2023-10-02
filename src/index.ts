import {
   headerHandler,
   paragraphHandler,
   listHandler,
   imageHandler,
   tableHandler,
   codeHandler,
   warningHandler,
} from './handlers'
import type { Handler, BlockDocument } from './types'

export class BlockParser {
   private handlers = new Map<string, Handler<any>>()

   /**
    * Constructs new instance of BlockParser
    * @param defaults - Register default handlers, default is true
    */
   public constructor(defaults: boolean = true) {
      if (defaults) {
         this.registerHandler('header', headerHandler)
         this.registerHandler('paragraph', paragraphHandler)
         this.registerHandler('list', listHandler)
         this.registerHandler('image', imageHandler)
         this.registerHandler('table', tableHandler)
         this.registerHandler('code', codeHandler)
         this.registerHandler('warning', warningHandler)
      }
   }

   /**
    * Returns block handler by given block `type`
    * @param type - Block type
    */
   public getHandler<T>(type: string): Handler<T> {
      return this.handlers.get(type)
   }

   /**
    * Sets new handler for specified `type` of block
    * @param type - Block type
    * @param h - Handler
    */
   public registerHandler<T>(type: string, h: Handler<T>) {
      this.handlers.set(type, h)
   }

   /**
    * Removes handler from list by given block `type`
    * @param type - Block type
    */
   public unregisterHandler(type: string): void {
      this.handlers.delete(type)
   }

   /**
    * Parses block document and produce HTML output
    * @param doc - Block document
    */
   public parse(doc: BlockDocument): string {
      let html = ''

      for (const block of doc.blocks) {
         const callback = this.handlers.get(block.type)

         if (callback) {
            const markup = callback.call(this, block) as string
            html += markup + '\n'
         } else {
            throw new Error(`Handler not found for block type "${block.type}"`)
         }
      }

      return html.trim()
   }
}
