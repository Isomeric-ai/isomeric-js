const default_host = 'https://api.isomeric.ai'

export class Isomeric {
  access_token: string
  host: string
  text: string
  schema: any
  data: any

  constructor(access_token: string, host: string = default_host) {
    this.access_token = access_token
    this.host = host
  }

  setText(text: string) {
    this.text = text
    return this
  }

  setSchema(schema: any) {
    this.schema = schema
    return this
  }

  parse(): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(`${this.host}/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.access_token}`
        },
        body: JSON.stringify({
          text: this.text,
          schema: this.schema,
        })
      })
      .then(response => {
        resolve(response.json())
      })
    })
  }
}