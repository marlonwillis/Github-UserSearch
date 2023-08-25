export class User {
    constructor(
        public name: string,
        public company: string,
        public login: string,
        public avatar_url: string,
        public email: string,
        public html_url: string,
        public twitter_username: string,
        public location: string,
        public blog: string,
        public bio: string,
        public public_repos: number,
        public followers: number,
        public following: number,
        public created_at: Date,
    ){}
}
