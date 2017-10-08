import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import cookies from 'next-cookies';
import { Segment, Header, Button, Form, Message } from 'semantic-ui-react';
import Client from '../lib/client';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default class TermsOfService extends React.Component {
  async getInitialProps(ctx) {
    const { authTokenID } = cookies(ctx);
    return { authTokenID };
  }

  render() {
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
          />
          <link rel="stylesheet" href="/static/css/global.css" />
          <script src="https://js.stripe.com/v3/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="holder">
          <Nav activeItem="tos" authAccount={null} />
          <Segment padded>
            <Header as="h1">SiaCDN - Terms of Service</Header>
            <p>Last Updated: October 7, 2017</p>
            <p>
              These terms outline, with an attempt at the least amount of
              legalese, the important things you need to know about accessing
              and using SiaCDN&rsquo;s website and service (collectively,
              &ldquo;Service&rdquo;). These are our terms of service
              (&ldquo;Terms&rdquo;). Please read them carefully.
            </p>

            <Header as="h3">Accepting these Terms</Header>
            <p>
              If you access or use the Service, it means you agree to be bound
              by all of the terms below. So, before you use the Service, please
              read all of the terms. If you don&rsquo;t agree to all of the
              terms below, please do not use the Service. Also, if a term does
              not make sense to you, please let us know by e-mailing{' '}
              <a href="mailto:eric@maxint.co">eric@maxint.co</a>.
            </p>

            <Header as="h3">Changes to these Terms</Header>
            <p>
              We reserve the right to modify these Terms at any time. For
              instance, we may need to change these Terms if we come out with a
              new feature or for some other reason.
            </p>
            <p>
              Whenever we make changes to these Terms, the changes are effective
              six (6) weeks after we post such revised Terms to our website
              (indicated by revising the date at the top of these Terms), or
              upon your acceptance if we provide a mechanism for your immediate
              acceptance of the revised Terms (such as a click-through
              confirmation or acceptance button). It is your responsibility to
              check the website regularly for changes to these Terms.
            </p>
            <p>
              If you continue to use the Service after the revised Terms go into
              effect, then you have accepted the revised Terms.
            </p>

            <Header as="h3">Privacy Policy</Header>
            <p>
              For information about how we collect and use information about
              users of the Service, please check out our{' '}
              <a href="/privacy">privacy policy</a>.
            </p>

            <Header as="h3">Third-Party Services</Header>
            <p>
              From time to time, we may provide you with links to third party
              websites or services that we do not own or control. Your use of
              the Service may also include the use of applications that are
              developed or owned by a third party. Your use of such third party
              applications, websites, and services is governed by that
              party&rsquo;s own terms of service or privacy policies. We
              encourage you to read the terms and conditions and privacy policy
              of any third party application, website or service that you visit
              or use. Note that while SiaCDN itself does not work directly with
              advertisers, third party applications may contain advertising or
              marketing materials provided by such third parties. We require
              third-party developers who use our API to maintain certain
              standards with respect to your use of their applications and
              services.
            </p>

            <Header as="h3">Creating Accounts</Header>
            <p>
              When you create an account, you may use any name (real, fake or
              otherwise) for other users to see. If you create a &ldquo;pseudo
              anonymous&rdquo; account, please provide your real name for
              billing purposes. If you create a &ldquo;parody&rdquo; account,
              you must clearly label your account as such and still provide your
              real name for billing purposes.
            </p>
            <p>
              When you create an account you also agree to maintain the security
              of your password and accept all risks of unauthorized access to
              your account data and any other information you provide to SiaCDN.
            </p>
            <p>
              If you discover or suspect any Service security breaches, please
              let us know as soon as possible.
            </p>

            <Header as="h3">Your Content &amp; Conduct</Header>
            <p>
              Our Service allows you and other users to post, link and otherwise
              make available content. You are responsible for the content that
              you make available to the Service, including its legality,
              reliability, and appropriateness.
            </p>
            <p>
              When you post, link or otherwise make available content to the
              Service, you grant us the right and license to use, reproduce,
              modify, publicly perform, publicly display and distribute your
              content on or through the Service (including via applications). We
              may format your content for display throughout the Service, but we
              will not edit or revise the substance of your content itself.
            </p>
            <p>
              Aside from our limited right to your content, you retain all of
              your rights to the content you post, link and otherwise make
              available on or through the Service.
            </p>
            <p>
              You can remove the content that you posted by deleting it. Once
              you delete your content, it will not appear on the Service, but
              copies of your deleted content may remain in our system or backups
              for some period of time not to exceed six (6) months.
            </p>
            <p>
              In order to make SiaCDN a great service for all of us, please do
              not post, link and otherwise make available on or through the
              Service any of the following:
            </p>
            <ul>
              <li>
                Content that is libelous, defamatory, bigoted, fraudulent or
                deceptive;
              </li>
              <li>
                Content that is illegal or unlawful, that would otherwise create
                liability;
              </li>
              <li>
                Content that may infringe or violate any patent, trademark,
                trade secret, copyright, right of privacy, right of publicity or
                other intellectual or other right of any party;
              </li>
              <li>
                Mass or repeated promotions, political campaigning or commercial
                messages directed at users who do not follow you (SPAM);
              </li>
              <li>
                Private information of any third party (e.g., addresses, phone
                numbers, email addresses, Social Security numbers and credit
                card numbers); and
              </li>
              <li>
                Viruses, corrupted data or other harmful, disruptive or
                destructive files or code.
              </li>
            </ul>
            <p>
              Also, you agree that you will not do any of the following in
              connection with the Service or other users:
            </p>
            <ul>
              <li>
                Use the Service in any manner that could interfere with,
                disrupt, negatively affect or inhibit other users from fully
                enjoying the Service or that could damage, disable, overburden
                or impair the functioning of the Service;
              </li>
              <li>
                Impersonate or post on behalf of any person or entity or
                otherwise misrepresent your affiliation with a person or entity;
              </li>
              <li>
                Collect any personal information about other users, or
                intimidate, threaten, stalk or otherwise harass other users of
                the Service;
              </li>
              <li>
                Create an account or post any content if you are not over 13
                years of age; and
              </li>
              <li>
                Circumvent or attempt to circumvent any filtering, security
                measures, rate limits or other features designed to protect the
                Service, users of the Service, or third parties.
              </li>
            </ul>

            <Header as="h3">SiaCDN&rsquo;s Materials</Header>
            <p>
              We put a lot of effort into creating the Service including, the
              logo and all designs, text, graphics, pictures, information and
              other content (excluding your content). This property is owned by
              us or our licensors and it is protected by U.S. and international
              copyright laws. We grant you the right to use it.
            </p>
            <p>
              However, unless we expressly state otherwise, your rights do not
              include: (i) publicly performing or publicly displaying the
              Service, (ii) modifying or otherwise making any derivative uses of
              the Service or any portion thereof; (iii) using any data mining,
              robots or similar data gathering or extraction methods; (iv)
              downloading (other than page caching) of any portion of the
              Service or any information contained therein; (v) reverse
              engineering or accessing the Service in order to build a
              competitive product or service; or (vi) using the Service other
              than for its intended purposes. If you do any of this stuff, we
              may terminate your use of the Service.
            </p>

            <Header as="h3">Hyperlinks and Third Party Content</Header>
            <p>
              You may create a hyperlink to the Service. But, you may not use,
              frame or utilize framing techniques to enclose any SiaCDN
              trademark, logo or other proprietary information without
              SiaCDN&rsquo;s express written consent.
            </p>
            <p>
              SiaCDN makes no claim or representation regarding, and accepts no
              responsibility for third party websites accessible by hyperlink
              from the Service or websites linking to the Service. When you
              leave the Service, you should be aware that these Terms and our
              policies no longer govern.
            </p>
            <p>
              A lot of the content on the Service is from you and others, and we
              don&rsquo;t review, verify or authenticate it, and it may include
              inaccuracies or false information. We make no representations,
              warranties, or guarantees relating to the quality, suitability,
              truth, accuracy or completeness of any content contained in the
              Service. You acknowledge sole responsibility for and assume all
              risk arising from your use of or reliance on any content.
            </p>

            <Header as="h3">Unavoidable Legal Stuff</Header>
            <p>
              THE SERVICE AND ANY OTHER SERVICE AND CONTENT INCLUDED ON OR
              OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SERVICE ARE PROVIDED
              TO YOU ON AN AS IS OR AS AVAILABLE BASIS WITHOUT ANY
              REPRESENTATIONS OR WARRANTIES OF ANY KIND. WE DISCLAIM ANY AND ALL
              WARRANTIES AND REPRESENTATIONS (EXPRESS OR IMPLIED, ORAL OR
              WRITTEN) WITH RESPECT TO THE SERVICE AND CONTENT INCLUDED ON OR
              OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SERVICE WHETHER
              ALLEGED TO ARISE BY OPERATION OF LAW, BY REASON OF CUSTOM OR USAGE
              IN THE TRADE, BY COURSE OF DEALING OR OTHERWISE.
            </p>
            <p>
              IN NO EVENT WILL SIACDN BE LIABLE TO YOU OR ANY THIRD PARTY FOR
              ANY SPECIAL, INDIRECT, INCIDENTAL, EXEMPLARY OR CONSEQUENTIAL
              DAMAGES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH THE
              SERVICE OR ANY OTHER SERVICE AND/OR CONTENT INCLUDED ON OR
              OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SERVICE, REGARDLESS OF
              THE FORM OF ACTION, WHETHER IN CONTRACT, TORT, STRICT LIABILITY OR
              OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES OR ARE AWARE OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL
              LIABILITY FOR ALL CAUSES OF ACTION AND UNDER ALL THEORIES OF
              LIABILITY WILL BE LIMITED TO THE AMOUNT YOU PAID FOR ONE 12 MONTH
              SUBSCRIPTION. THIS SECTION WILL BE GIVEN FULL EFFECT EVEN IF ANY
              REMEDY SPECIFIED IN THIS AGREEMENT IS DEEMED TO HAVE FAILED OF ITS
              ESSENTIAL PURPOSE.
            </p>
            <p>
              You agree to defend, indemnify and hold us harmless from and
              against any and all costs, damages, liabilities, and expenses
              (including attorneys&rsquo; fees, costs, penalties, interest and
              disbursements) we incur in relation to, arising from, or for the
              purpose of avoiding, any claim or demand from a third party
              relating to your use of the Service or the use of the Service by
              any person using your account, including any claim that your use
              of the Service violates any applicable law or regulation, or the
              rights of any third party, and/or your violation of these Terms.
            </p>

            <Header as="h3">Copyright Complaints</Header>
            <p>
              SiaCDN takes intellectual property rights seriously. In accordance
              with the Digital Millennium Copyright Act (&ldquo;DMCA&rdquo;) and
              other applicable law, SiaCDN has adopted a policy of terminating,
              in appropriate circumstances and, at SiaCDN&rsquo;s sole
              discretion, the accounts of users who are deemed to be repeat
              infringers. For further information, please see SiaCDN&rsquo;s{' '}
              <a href="/copyright">Copyright Policy</a>.
            </p>

            <Header as="h3">Governing Law</Header>
            <p>
              The validity of these Terms and the rights, obligations, and
              relations of the parties under these Terms will be construed and
              determined under and in accordance with the laws of the State of
              California, without regard to conflicts of law principles.
            </p>

            <Header as="h3">Governing Law</Header>
            <p>
              You expressly agree that exclusive jurisdiction for any dispute
              with SiaCDN, or in any way relating to your use of the SiaCDN
              website or Service, resides in the courts of the State of
              California and you further agree and expressly consent to the
              exercise of personal jurisdiction in the courts of the State of
              California located in San Francisco, California in connection with
              any such dispute including any claim involving SiaCDN. You further
              agree that you and SiaCDN will not commence against the other a
              class action, class arbitration or other representative action or
              proceeding.
            </p>

            <Header as="h3">Termination</Header>
            <p>
              If you breach any of these Terms, we have the right to suspend or
              disable your access to or use of the Service.
            </p>

            <Header as="h3">Entire Agreement</Header>
            <p>
              These Terms constitute the entire agreement between you and SiaCDN
              regarding the use of the Service, superseding any prior agreements
              between you and SiaCDN relating to your use of the Service.
            </p>

            <Header as="h3">Feedback</Header>
            <p>
              We love feedback. Please let us know what you think of the
              Service, these Terms and, in general, SiaCDN. When you provide us
              with any feedback, comments or suggestions about the Service,
              these Terms and, in general, SiaCDN, you irrevocably assign to us
              all of your right, title and interest in and to your feedback,
              comments and suggestions.
            </p>

            <Header as="h3">Questions &amp; Contact Information</Header>
            <p>
              Questions or comments about the Service may be directed to us at
              the email address{' '}
              <a href="mailto:eric@siacdn.com">eric@siacdn.com</a>.
            </p>
          </Segment>
          <Footer activeItem="tos" authAccount={null} />
        </div>
      </div>
    );
  }
}
