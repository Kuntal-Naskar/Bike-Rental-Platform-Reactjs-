import React, { useRef,useState,useEffect } from 'react';
import '../css/Privacy.css';

import Lottie from "lottie-react";
import pp from "../pp.json"

import { motion, useInView,useAnimation} from "framer-motion"





const Privacypage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref , {once:true});
  const mainControls = useAnimation();
 

  
  useEffect(()=>{
    if(isInView){

    }
  },[isInView]);


    const paragraphRefs = useRef([]);
    const scrollToSection = (index) => {
      if (paragraphRefs.current[index]) {
        paragraphRefs.current[index].scrollIntoView({ behavior: 'smooth',block: "start" });
      }
    };


    
  return (
    <>
       

    <div>
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth,transition:{duration: 0.1}}}  className="pcontainer" >
                    <div className='pheading'> 
                    <Lottie animationData={pp} style={{}} className='page'/>
                      <h1 style={{}}>                     
                        Privacy Policy
                      </h1>
                    </div>


      {/* Fixed sidebar */}
                <div className='content'>
                    <div className='col'>
                        <div className="fixed-sidebar">
                            <button onClick={() => scrollToSection(0)}>Consent</button>
                            <button onClick={() => scrollToSection(1)}>Types of Information Collected by Us</button>
                            <button onClick={() => scrollToSection(2)}>Collection and Storage of Information</button>
                            <button onClick={() => scrollToSection(3)}>Purpose For Collecting of Information</button>
                            <button onClick={() => scrollToSection(4)}>Sharing and Disclosure of Your Information</button>
                            <button onClick={() => scrollToSection(5)}>Link to Other Websites and Third-Party Services</button>
                            <button onClick={() => scrollToSection(6)}>Children's Privacy</button>
                            <button onClick={() => scrollToSection(7)}>Data Protection Rights</button>
                            <button onClick={() => scrollToSection(8)}>Storage And Transfer Of Information</button>
                            <button onClick={() => scrollToSection(9)}>Cookies And Other Tracking Technologies</button>
                            <button onClick={() => scrollToSection(10)}>Data Rentention</button>
                        </div>
                    </div>
                

            {/* Scrollable content */}
            <div ref={ref} className='col'>
            <motion.div className="scrollable-content"
            variants={{
              hidden:{opacity:0, y:75},
              visible:{ opacity:1, y:0},
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5,delay:0.25 }}>
                                        <p>
                                        RIDERS INDIA PRIVATE LIMITED (referred as Company or “we” or “us” or “our") is the owner of the website domain at www.riders.com and mobile application “Riders – Bike Rentals” available at Google Play Store/Apple App Store; (referred as “Platform”); and any service availed by Users (hereinafter referred to as “you”, “your” or “User”) through the Platform is conditioned upon your acceptance of the terms and conditions contained in Terms of Service as available on Platform and this privacy policy (“Privacy Policy”).</p><p>

                                        THIS PRIVACY POLICY IS AN ELECTRONIC RECORD IN THE FORM OF AN ELECTRONIC CONTRACT FORMED UNDER THE INFORMATION TECHNOLOGY ACT, 2000 AND THE RULES MADE THEREUNDER AND THE AMENDED PROVISIONS PERTAINING TO ELECTRONIC DOCUMENTS / RECORDS IN VARIOUS STATUTES AS AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000 OR ANY RELEVANT STATUTE OR REGULATION UNDER ANY APPLICABLE JURISDICTION. THIS PRIVACY POLICY DOES NOT REQUIRE ANY PHYSICAL, ELECTRONIC OR DIGITAL SIGNATURE.</p><p>

                                        The purpose of this Privacy Policy is to ensure that there is an intact charter to collect, use and protect any personal and/or sensitive data collected by us. This Policy defines our procedure for collection, usage, processing, disclosure and protection of any information obtained by us through the Platform. Capitalised terms that are not defined in this Privacy Policy shall have the same meaning as ascribed to them in our Terms of Service. Any reference made to Privacy policy in this document shall mean and refer to the latest version of the Privacy Policy.
                                        <br/>
                                    </p>
                        <div ref={(el) => (paragraphRefs.current[0] = el)} className="section">
                       
                        <h2>Consent</h2>
                        <p>THIS PRIVACY POLICY IS A LEGALLY BINDING DOCUMENT BETWEEN YOU AND THE COMPANY. THE TERMS OF THIS PRIVACY POLICY WILL BE EFFECTIVE UPON YOUR ACCEPTANCE OF THE SAME OR BY YOUR USE OF OUR SERVICES AND WILL GOVERN THE RELATIONSHIP BETWEEN COMPANY AND YOU FOR YOUR USE OF THE PLATFORM AND OUR SERVICES.
                        </p><p>PLEASE READ THIS PRIVACY POLICY CAREFULLY AS IT AFFECTS YOUR RIGHTS AND LIABILITIES UNDER LAW. BY USING THIS PLATFORM AND AVAILING OUR SERVICES, YOU INDICATE THAT YOU UNDERSTAND, AGREE AND CONSENT TO THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT USE THIS WEBSITE OR AVAIL OUR SERVICES.</p><p>

                                                Please be advised that any Information procured by us, shall be:<br/>
                                                <ul>
                                                  <li> processed fairly and lawfully for rendering the Services;</li>
                                                  <li>obtained only for specified and lawful purposes;</li>
                                                  <li>adequate, relevant and not excessive in relation to the purpose for which it is required;</li>
                                                  <li>able to be reviewed by the User, from time to time and updated-if need arises; and</li>
                                                  <li>not kept longer than for the time which it is required or the purpose for which it is 
                                                  required or as required by the applicable law.</li>
                                                  
                                                </ul>
                                                
                If you do not agree with this Privacy Policy, you may refuse or withdraw your consent any time, or alternatively choose to not provide us with any Personal Information, you understand that under such circumstance, we may be unable to render Services. Any such intimation to withdraw your consent can be sent to 
{/*<a href='fdfd'></a>*/}
                </p><p>
                WE SHALL NOT BE LIABLE FOR ANY LOSS OR DAMAGE SUSTAINED BY REASON OF ANY DISCLOSURE (INADVERTENT OR OTHERWISE) OF ANY DATA, IF THE SAME IS EITHER (A) REQUIRED FOR SHARING YOUR INFORMATION FOR LEGITIMATE PURPOSES; OR (B) WAS CAUSED THROUGH NO FAULT, ACT, OR OMISSION OF THE COMPANY.
              
                                               
                                                
                                                
                                                
                                                
                                                </p>
                        </div>
                        <div ref={(el) => (paragraphRefs.current[1] = el)} className="section">
                        <h2>Types of Information Collected by Us</h2>
                        <ul>
                            <li>“Personal Data” means and includes any Information that relates to a natural person through which an individual is identified, such as the name, contact details, email address, gender, age, organisation name, organisation email id, demographic information such as address and pin code, any photo identity or any other information relevant to product choice and preferences provided by a User, including but not limited to information gathered through availing Services.</li>  
                            <li>“Sensitive Personal Data” means and includes information relating to; (i) government ID cards; (ii) financial information such as bank account or credit card or debit card or other payment instrument details; and (iii) any detail relating to the above-mentioned points as provided to us for using the Platform.</li>
                            <li>“Technical Information” means and includes any Information gathered through various technologies that may employ cookies, web beacons, or similar technologies to automatically record certain information from your device through which you use the Platform. This technical information may include your Internet Protocol (IP) address, device or browser type, Internet service provider (ISP), referring or exit pages, clickstream data, operating system, hardware model, operating system version, unique device identifiers, camera data, and mobile network. This data includes usage information and user statistics.</li>
                            <li>“Locational Information” shall mean and include the information obtained through GPS or other means, such as the geographical location of the User, locational data and user tracking.</li>
                            <li>“Social Media Data” If you access the Platform through a third-party platform such as a social media service or connect Our Services to a third-party platform, the Information we collect may include your user name associated with that third-party platform, any information or content the third-party platform has the right to share with Us, such as your profile picture, email address or friends list, and any information you have made public in connection with the respective third-party platform. When you access the Platform through a third-party platform, you are authorizing us to collect, store, and use and retain such information from the third-party platform in accordance with this Privacy Policy.</li>
                            <li>“Non-Personal Information”</li>
                            <li>“Information collected through use of our Service” means and includes generic and non-identifying information which is shared with us to avail our Services.</li>
                            <li>
                            "Non-Personal Information” means and includes any information that does not reveal your specific identity, such as, browser information, information collected through 
                            Cookies (as defined below), pixel tags and other technologies, demographic information, etc. As is true with most websites, our Company gathers some information automatically 
                            when you visit the Platform. When you use the Platform, we may collect certain information about your computer or mobile to facilitate, evaluate and verify your use of the Platform.
                            For example, we may store environmental variables, such as browser type, operating system, speed of the central processing unit (CPU), referring or exit web pages, click patterns. 
                            This information is generally collected in aggregate form, without identifying any User individually.
                            </li>                        
                        </ul>
                        (The Personal Data, Sensitive Personal Data, Technical Information, Locational Information, Social Media Data and Non-Personal Information are collectively referred to as “Information").
                        </div>

                        <div ref={(el) => (paragraphRefs.current[2] = el)} className="section">
                        <h2>Collection and Storage of Information</h2>
                        <p>
                        <ol >
                          <li> Information may be collected in various ways including during the course of you registering as a User on the Platform, or availing certain Services offered on the Platform. </li>
                          <ul>
                            <li>Directly from You. For example, from the forms you complete on our Service, preferences you express or provide through our Service, or from your purchases on our Service.
    </li>
                            <li>Indirectly from You. For example, from observing your activity on our Service.
</li>
                            <li>Automatically from You. For example, through cookies we or our service providers set on your Device as you navigate through our Service.
    </li>
                            <li>From Service Providers. For example, we may receive Information about you from third-party platforms, such as social media platforms, marketing and advertising firms, commercially available sources and business partners to whom you have consented disclosure of such Information.
</li>
                          </ul>
    
    
    
    
                          <li>Please do note that each category of Information may be treated differently as per this Privacy Policy. </li>
                        </ol>
                        </p>
                        </div>
                        <div  ref={(el) => (paragraphRefs.current[3] = el)} className="section">
                        <h2>Purpose For Collecting of Information</h2>
                        <p>The Company collects, uses, stores and processes your Information for any purpose as may be permissible under applicable laws (including where the applicable law provides for such collection, usage, storage or processes in accordance with the consent of the User) and shall include the following:
<ol><li>
To render services and facilitate your use of the Platform;
</li><li>
To respond to your inquiries or fulfill your requests for information about the various Services offered on the Platform;
</li><li>
To provide you with information about Services available on the Platform and to send you information, materials, and offers;
</li><li>
To send you important information regarding the Platform, changes in terms and conditions, user agreements, and policies, and/or other administrative information;
</li><li>
To send you surveys and marketing communications;
</li><li>
To improve user experience;
</li><li>
To help you address your problems incurred on the Platform, including capturing error logs and technical data for addressing technical issues;
</li><li>
To protect the integrity and for proper administering of the Platform;
</li><li>
To conduct academic research, surveys, analytical studies on various aspects including user behavior, user preferences, etc.;
</li><li>
To respond to legal, judicial, quasi-judicial process and provide information to law enforcement agencies or in connection with an investigation on matters related to public safety, as permitted by law;
</li><li>
To implement information security practices;
</li><li>
To determine any security breaches, computer contaminant, or computer virus;
</li><li>
To investigate, prevent, or take action regarding illegal activities and suspected fraud;
</li><li>
To enable a potential buyer or investor to evaluate the business of the Company.
</li><li>
Business or Research Purposes: The Information saved and except Sensitive Personal Information, is used for business or research purposes, including improving and customizing the Platform for ease of use and the products and services offered by us. We may archive this information to use it for future communications for providing updates and/or surveys.
</li><li>
Aggregating Information / Anonymized data: We may aggregate Information and analyze it in a manner to further accentuate the level of services that we offer to our customers. This Information includes the average number of Users of the Platform, the average clicks of the services, the features used, the response rate, etc., and other such statistics regarding groups or individuals. In doing so, we shall not be making disclosures of any Sensitive Personal Information as defined above.
</li>
</ol>
[Individually and collectively referred to as ("Legitimate Purposes")] 
</p>
                        </div>
                        <div  ref={(el) => (paragraphRefs.current[4] = el)} className="section">
                        <h2>Sharing and Disclosure of Your Information</h2>
                        <p>
<ol>
  <li>We do not rent, sell or disclose or share any Information that we collect from you, with third parties, save and except in order to provide you with the Services. Any such disclosure, if made, shall be in accordance with this Privacy Policy and as per the procedure prescribed by law and in compliance with our legal obligations. We may share your Information in circumstances and for the purposes as specified hereunder:
</li>
  <li>We shall share the information to the third-party service providers/ vendors, to provide you with the Services.
</li>
  <li>
  We may disclose any Information provided by you on the Platform as may be deemed to be necessary or appropriate:
 
  </li>
  <ul>
  <li>Under applicable law, including laws outside your country of residence;</li>
    <li>To comply with legal process;</li>
    <li>To respond to requests from public and government authorities, including public and government authorities outside your country of residence;
    </li>
    <li>To protect our operations or those of any of our affiliates;
    </li>
    <li>To protect our rights, privacy, safety, or property, and that of our affiliates, you, or others;
    </li>
    <li>To allow us to pursue available remedies or limit the damages that we may sustain;
    </li>
    <li>To protect against legal liability;
    </li>
    <li> To protect the personal safety of Users of the Platform;</li>
    <li>To prevent or investigate possible wrongdoing in connection with the Platform.</li>
  </ul>
    
   
    
<li>Merger or Acquisition: We may share Information upon merger or acquisition of Company with another company. We shall transmit and transfer the Information upon acquisition or merger of Company with another company.
</li><li>With our service providers: We may share Information with other service providers on a need-to-know basis, subject to obligations of confidentiality for provision of Services. We hereby clarify that we work with institutions, vendors, partners, advertisers, and other service providers, including (but not limited) to those who provide products or services such as contact Information verification, website hosting, data analysis, providing infrastructure, information technology services, auditing services and other similar services, in different industries and categories of business by virtue of lawful contracts instituted between such third parties and Company to improve our product and services. Accordingly, we may share your Information with such service provider in order to provide you with Services.
</li><li>Employees /Agents of Company: We follow a strict confidentiality policy with regard to disclosure of confidential information to our employees or other personnel. There may be situations, where we may disclose the confidential information only to those of our employees and other personnel on a need-to-know basis. Any breach of confidential information by the employees, personnel within the Company is dealt with stringently by us.
</li><li>Except for the Information disclosed pursuant to this section, Company may share Information only if you authorise us to do so.
</li>
</ol>
</p>
                        </div>
                        <div  ref={(el) => (paragraphRefs.current[5] = el)} className="section">
                        <h2>Link to Other Websites and Third-Party Services</h2>
                        <p>
<ol>
<li>Our Platform may provide links to other sites. These links are provided for your convenience only and the provision of these links does not mean that sites are related or associated with us. Please note that these sites have their own terms of use and privacy policy. You should check their privacy policy before you submit Your Personal Information or any other data with them. We don’t guarantee the content and the security of those sites.
</li><li>We may have certain features on our Platform which may be hosted by third parties, your interaction with such features shall be governed by the privacy policy of such third parties.
</li><li>We shall not be responsible for any loss, damage, claim or expense caused as a result of you accessing these third-party sites and features.
</li><li>We may use your Information to send you promotional Information about third parties which, we think you may find interesting, if you tell us that you wish this to happen. We shall not be responsible for any disclosure of Information due to unauthorised third-party access or other acts of third parties or acts or omissions beyond our reasonable control and you agree that you will not hold us responsible for any breach of security unless such breach has been caused as a direct result of our negligence or wilful default.
</li><li>We use support services of third-party platforms and/or companies to direct you to payment gateways when you opt to pay for our Services. Your financial information is collected, stored and retained by such third-party platforms. We and such designated third-party platforms undertake measures designed to provide a security level that is appropriate to the risks of processing your personal information. However, you are requested to check and consent to the “Privacy Policy” of such third-party platforms in order to accept how such third-party platforms handle your Information.
</li>
</ol>
</p>
                        </div>
                        <div  ref={(el) => (paragraphRefs.current[6] = el)} className="section">
                        <h2>Children's Privacy</h2>
                        <p>Our Services are not meant to be used by Children (as defined by applicable privacy laws for a particular jurisdiction). We do not knowingly collect Personal Information relating to children and if you think that Your child has provided this kind of information on our Platform, we strongly encourage you to contact us immediately and we will take reasonable steps to promptly remove or destroy such information. </p>
                        </div>
                        <div  ref={(el) => (paragraphRefs.current[7] = el)} className="section">
                        <h2>Data Protection Rights</h2>
                        <p>
                        <ol>
                          <li>
        You have certain rights available to you when it comes to your Personal Information. Subject to any exemptions provided by the applicable laws, you have the following rights:
        </li> 
        <ul>
            <li>Rectifying, correcting, updating and removing Your information:</li>
           You can access, edit, modify and/or update your Personal Information by logging into your user profile or you can write to us via email in case you wish to exercise this right.
            <li>Accessing and updating or deleting Your information:</li>
           Our Services and related documentation on our Platform provide you with the ability to access, update and delete certain Personal Information from your Account, if any. We will provide you with information about whether we hold any of your Personal Information upon request. We will respond to such requests within a reasonable timeframe. Please note, however, that we may need to retain certain information for record keeping purposes, to complete our Services and related obligations to you or to comply with our legal obligations.
            <li>Object or restrict processing of Your information:</li>
             <li>You have the right to:</li> (i) object to our processing of your Personal Information; and/or (ii) request that we restrict the processing of your Personal Information.
             <li>Portability:</li>
            You shall have the right to request us to transfer Your Personal Information to another controller, or directly to you, in a structured, commonly used and machine-readable format.
        
        </ul>
            <li>In order to exercise these rights, please contact us on {/*support@riders.com*/}
        </li>
              </ol>
                      </p>
                        </div>



                        <div ref={(el) => (paragraphRefs.current[8] = el)} className="section" >
                        <h2>STORAGE AND TRANSFER OF INFORMATION</h2>
<p>Your Information will primarily be stored in electronic form; provided, however, that certain data can also be stored in physical form. We may store, collect, process and use your data in countries other than the Republic of India but under compliance with applicable laws. We may enter into agreements with third parties (in or outside of India) to store or process your information or data. These third parties may have their own security standards to safeguard your information or data and we will on a commercial reasonable basis require such third parties to adopt reasonable security standards to safeguard your information / data.
</p></div>
 <div ref={(el) => (paragraphRefs.current[9] = el)} className="section" >
<h2>COOKIES AND OTHER TRACKING TECHNOLOGIES</h2>
<ol>
  <li>Our Platform may utilise “cookies” and other Technical Information. “Cookies” are a small text file consisting of alphanumeric numbers used to collect the Information about Platform activity. The Technical Information helps us analyse web traffic and helps you by customising the Platform to your preferences. Cookies in no way gives us access to your computer or mobile device. In relation to Cookies, you can deny access to the installation of the Cookies by modifying the settings on your web browser, however, this may prevent you from taking full advantage of the Platform.
  </li>
  <li>Our use of Cookies and Technical Information allows us to improve Platform and your experience of Platform and Services. We may also analyse Technical Information that does not contain Sensitive Personal Information for trends and statistics.
</li>
</ol>
    </div> 
    <div  ref={(el) => (paragraphRefs.current[10] = el)} className="section" >
    <h2>DATA RETENTION</h2>
<p>

We will retain your Information for as long as your Account is active or as needed to provide our Services. We shall retain and use the Information collected by us as necessary to comply with our legal obligations, resolve disputes or for other Legitimate Purposes. If you cancel/ deactivate/ unsubscribe your account with us, we are not under any obligation to retain your Information. However, may retain the Information pertaining to the User for the maximum period permitted under the law of the land from the date of deactivation of User’s Account.   
</p> 
</div></motion.div>   
            </div>
            
      
      </div>     
    </motion.div>
    </div>
    </>
  );
};

export default Privacypage;
