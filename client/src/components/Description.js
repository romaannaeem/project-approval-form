import React from 'react';

const Description = props => {
  return (
    <div>
      <div>
        By clicking “I approve” and submitting this form you have reviewed your
        demo url and approve it to go live as is.
      </div>
      <br />
      <div>
        You also understand that SparkLanding provides a warranty period
        following the launch. Any requests for support, changes or revisions
        past this warranty period will be billed as additional work. If you are
        unsure, please speak to your Project Manager about this.
      </div>
      <br />
      <div>
        By authorising SparkLanding to launch your website you agree to the
        following:
      </div>
      <br />
      <ol>
        <li>
          <b>Approval:</b> The website is approved and meets all requirements.
          SparkLanding has delivered a fully functioning, finished product.
        </li>
        <li>
          <b>Testing:</b> I have been given sufficient time to test the website.
        </li>
        <li>
          <b>Billable hours:</b> I understand that all future changes or
          corrections in design or content are now billable at SparkLanding’s
          standard rates.
        </li>
        <li>
          <b>Browser compatibility:</b> SparkLanding has developed my website
          for compatibility with the most recent versions of Internet Explorer,
          Mozilla Firefox, Safari and Chrome web browsers. I also understand
          that older browsers and future browsers may not display my website or
          provide bug-free functionality due to the unpredictable nature of
          browser design.
        </li>
        <li>
          <b>Future Issues:</b> Over time, certain aspects of websites may have
          issues. Browser compatibility may diminish, unknown customer input,
          and various random variables may cause slow degeneration of my
          website. I understand that SparkLanding is not responsible for these
          types of issues, but can help to control and prevent them with
          standard maintenance of the website.
        </li>
        <li>
          <b>Maintenance:</b> SparkLanding offers maintenance plans and that if
          I choose to decline a maintenance agreement, all future security
          updates, backups are your responsibility. Any work required by
          SparkLanding will be under our standard hourly rate. A quote will be
          provided.
        </li>
        <li>
          <b>Payment:</b> I understand that full payment must be made upon
          signing this form.
        </li>
      </ol>
    </div>
  );
};

export default Description;
