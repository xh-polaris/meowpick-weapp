export default class User {

    private username: string
    private avatar: string

    constructor() {
        this.username = "defaultName"
        this.avatar = "/img/123.jpg"

    }

    getUsername(){
        return this.username
    }

    getAvatar(){
        return this.avatar;
    }

}

// export {}
// var uname : string = "fjksldf"
//
// var globalnum = 12
// class Numbers{
//     static sval = 1
//     num_val = 2
//
//     storeNum() : void {
//         var localnum = 3
//     }
// }
//
// var obj = new Numbers()
// obj.storeNum()
