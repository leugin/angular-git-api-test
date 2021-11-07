export interface Commit {
    commit:{
        author:{
            name:string;
            email:string;
            date:Date|string;
        },
        committer:{
            name:string;
            email:string;
            date:Date|string;
        },
        message:string;
    }
}
