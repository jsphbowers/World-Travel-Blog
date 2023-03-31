export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.class = data.class
    this.graduated = data.graduated
    this.createdAt = data.createdAt
  }
}
export class Account extends Profile {
  constructor(data) {
    super(data)
    this.email = data.email
  }
}
