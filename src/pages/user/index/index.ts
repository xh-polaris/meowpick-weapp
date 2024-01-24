export default class User {

    private name: string
    private avatar: string
    code: string

    constructor() {
        this.name = "defaultName"
        this.avatar = "/img/123.jpg"
        this.code = ""
    }

    getName(){
        return this.name
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
