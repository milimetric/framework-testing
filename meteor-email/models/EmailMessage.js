function EmailMessage(folderId, subject, body){
    this.read = false;
    this.folderId = folderId;
    this.subject = subject;
    this.body = body;
    this.summary = function(){
        var cut = this.body.substring(0,50);
        return cut.length === this.body.length ? cut : cut + '...';
    };
    this.open = function(){
        return this._id && this._id === Session.get('emailId');
    };
    // TODO: awful implementation with mustache to blame.  Gotta get rid of mustache
    this.cssClass = function(){
        return this.open && this.read ? 'open read' : (this.open ? 'open' : (this.read ? 'read' : ''));
    };
}
