// types/index.d.ts
declare module 'isomeric-js' {
  export class Isomeric {
    constructor(access_token: string)
    setSchema(schema: any):Isomeric
    setHtml(html: string):Isomeric
    setUrl(url: string):Isomeric
    parse():Promise
  }
}