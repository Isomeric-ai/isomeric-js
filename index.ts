const default_host = 'https://api.isomeric.ai'

export class Isomeric {
  access_token: string
  host: string
  url: string = ""
  html: string
  schema: any
  data: any

  constructor(access_token: string, host: string = default_host) {
    this.access_token = access_token
    this.host = host
  }

  setHtml(html: string) {
    this.html = html
    return this
  }

  setUrl(url: string) {
    this.url = url
    return this
  }


  setSchema(schema: any) {
    this.schema = schema
    return this
  }

  parse(): Promise<any> {
    const html = this.html ? this.html : window.document.documentElement.outerHTML

    return new Promise((resolve, reject) => {
      fetch(`${this.host}/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.access_token}`
        },
        body: JSON.stringify({
          html: html,
          schema: this.schema,
          url: this.url
        })
      })
      .then(response => {
        resolve(response.json())
      })
    })
  }
}