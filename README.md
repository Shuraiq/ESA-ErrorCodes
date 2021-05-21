# <div align="center">ESA-Messaging</div>

##### <div align="center"> You can find the deployed app [here]. </div>
[here]: https://esa-messaging.herokuapp.com/

| Name        | Api           | Type |Body Parameters|
| ------------- |:-------------:| --------:|-----:|
| Inbound      | https://esa-messaging.herokuapp.com/API/inbound/sms | POST | <ul align="left"><li>from: Number</li><li>to: Number</li><li>text: String</li></ul> |
| Outbound      |    https://esa-messaging.herokuapp.com/API/outbound/sms   | POST | <ul align="left"><li>from: Number</li><li>to: Number</li><li>text: String</li></ul> |
| General |   https://esa-messaging.herokuapp.com    | GET | |

### Steps to setup the project from github repo.

#### Setting up and installing Dependencies 

* Clone or Download the the repo folder
* cd into the project directory
* Type in npm install to install all Dependencies

#### Running

* To run the project type in npm start
* The target url here would be localhost:8080/
* Using postman or any such tools you can make requests to the apis shown mentioned in the table given above along with appropriate body tags.
  
#### Running the deployed app

* Here the target url would be: https://esa-messaging.herokuapp.com
* Similar to the 3rd step in the above section you call on the apis shown from the table



