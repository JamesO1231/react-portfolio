import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright <a href="https://github.com/JamesO1231" target='_blank'> James Odell </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;