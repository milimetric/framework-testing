Template.EmailFolderList.folders = function() {
    return Folders.find();
};
Template.EmailMessageList.messages = function(){
    return FolderEmails.find({ folderId: Session.get('folderId') });
};
Template.EmailMessageDetails.message = function(){
    return FolderEmails.findOne({ folderId: Session.get('folderId'), _id: Session.get('emailId') });
};

Template.EmailFolderList.events({
    'click a.folder' : function () {
        Session.set('folderId', this._id);
    }
});

Template.EmailMessageList.events({
    'click a.email' : function () {
        FolderEmails.update(this._id, {$set: {read: true}});
        Session.set('emailId', this._id);
    }
});

Template.EmailMessageDetails.events({
    'click a.unread' : function () {
        FolderEmails.update(this._id, {$set: {read: false}});
    }
});
