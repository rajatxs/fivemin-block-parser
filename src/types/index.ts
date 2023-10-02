export interface BlockDocumentItem<T> {
   id: string
   type: string
   data: T
}

export interface BlockDocument {
   time: number
   blocks: BlockDocumentItem<Record<string, any>>[]
}

export type Handler<T> = (block: BlockDocumentItem<T>) => string
