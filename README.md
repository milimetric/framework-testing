Exploring javascript frameworks by implementing a mock email program in all the interesting ones.  Frameworks:

[Meteor][http://www.meteor.com] + [Knockout][http://knockoutjs.com]
[Ember][http://emberjs.com]
[Sammy][http://sammyjs.org]

The requirements are as follows (subject to change without further notice):

As an email user,
Given a list of email folders,
When I click on a folder,
I want to see a list of emails in that folder

As an email user,
Given a list of emails,
When I click on an email,
I want to see the details of the email
And to have the status of the email be saved as "read"

For the sake of consistency, all solutions should consider the same JSON.  More style guide stuff at some point.

    { "folders": {
        "stored":"remote",
        "id":"1234",
        "dataType":"Array",
        "dataItemType":"EmailFolder"
    } }

    EmailFolder:

    { "name":"name of folder", "emails": {
        "stored":"remote",
        "id":"1234",
        "dataType":"Array",
        "dataItemType":"EmailMessage"
    } }

    EmailMessage:

    { "subject":"subject of email", "body": {
        "stored":"remote",
        "id":"1234",
        "dataType":"string",
        "status":"unread"
    } }
