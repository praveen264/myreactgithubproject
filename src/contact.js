import React,{Component} from 'react';
import './contact.css';
const Contact = () => {
return <div className="contact">
   <h2> Contact Us</h2>
    <Form ></Form>
       </div>
}

const Form = () => {
    return <form>
         <table className="label">
             <tr>
             <td><label for="name">Full Name</label></td>
             <td><input type="text" name="name" id="name" title="Please give your full name" required/></td>
             </tr>
             <tr>
             <td><label for="email">Email</label></td>
             <td><input type="email" name="email" id="email"/></td>
             </tr>
             <tr>
             <td><label for="phone">Phone No:</label></td>
             <td><input type="tel" name="email" id="phone"/></td>
             </tr>
             <tr>
             <td><label for="message">Message:</label></td>
             <td><textarea name="message"></textarea></td>
             </tr>
             <tr><td><input type="submit" name="submit" value="SUBMIT"></input></td></tr>
             </table>
        </form>
       
}
export default Contact;