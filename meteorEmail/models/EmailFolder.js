function EmailFolder(name){
    this.name = name;
    this.count = function(){
        return FolderEmails.find({folderId: this._id, read: false}).count();
    };
    this.countExists = function(){
        return this.count() > 0;
    };
    this.selected = function(){
        return this._id && this._id === Session.get('folderId');
    };
}
