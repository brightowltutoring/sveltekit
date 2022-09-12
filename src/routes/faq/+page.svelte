<svelte:head>
  <link
    href="https://assets.calendly.com/assets/external/widget.css"
    rel="stylesheet"
  /><script
    src="https://assets.calendly.com/assets/external/widget.js"
    type="text/javascript"></script>
</svelte:head>

<details class="mydetails">
  <summary class="mysummary">
    <b>Q1</b> Can you briefly state your services?
  </summary>

  <p>
    In terms of personalized service: we offer 1-on-1 tutoring, mock test
    sessions with solution keys, video links, and session notes; see <a
      >/plans</a
    >
    for details.
    <br /><br />
    We are also in the process of creating a
    <a href="https://www.brightowltutoring.com/login">login-based</a>
    service; users will have access to <i>interactive</i> quizzes & exam-question
    video solutions.
  </p>
  <p style="font-size:12pt">
    <b>Note</b>: we <i>only</i> provide online/digital solutions. We are so
    confident in our workflow that we offer
    <a> a free demo session</a> of up to 20 minutes to show it off.
  </p>
</details>

<details class="mydetails">
  <summary class="mysummary"> <b>Q2</b> How do I pay? </summary>
  <p>
    On <a>/plans</a>
    build out a custom plan and we send you an invoice based on your selections.<br
    /><br />
    Alternatively you can toggle "off" to choose amongst pay-now options.
  </p>

  <p style="font-size:13pt; color:#777;">
    We use STRIPE to securely process all transactions — in use by companies
    such as Google, Amazon and Shopify.
  </p>
</details>

<details open class="mydetails">
  <summary class="mysummary">
    <b>Q3</b> How do I book multiple sessions at once?
  </summary>
  <p>
    Book a session on our <a>plans</a> page, and click "<a
      >➜ Schedule another event</a
    >" on the confirmation page.
    <i>
      If booked already, we can also book the remaining dates for you at the end
      of the live session</i
    >.
  </p>
</details>

<details class="mydetails">
  <summary class="mysummary"> <b>Q4</b> How do I share homework? </summary>
  <p>
    On your mobile device: go to <a>/homework</a> > click Upload > snap a
    picture > Submit. <i>We convert each image into clean formatted text.</i>
  </p>
  <p>
    Similar steps for PC. <span style="font-size:12pt; font-style:italic"
      >Accepted file extensions: .png, .jpg, .jpeg, .heic, .pdf, .txt, .rtf,
      .doc, .docx, .odt, .csv, .tex, .xls, .xlsx, .ods, .ppt, .pptx.</span
    >
  </p>

  <p>
    <span style="font-size:12pt; font-style:italic">
      For last second submissions, you may also point your homework at the
      webcam during the live session.</span
    >
  </p>
</details>

<details class="mydetails">
  <summary class="mysummary">
    <b>Q5</b> Which screen-sharing software are we using? Zoom?
  </summary>
  <p>
    <a href="https://zoom.us/download">Zoom</a>,
    <a href="https://www.teamviewer.com/en-us/meeting/">TeamViewer Meeting</a>,
    or
    <a
      href="https://www.microsoft.com/en-ca/microsoft-teams/group-chat-software"
      >Microsoft Teams</a
    >
    — these provide the smoothest screensharing experience. Click the links to download
    or visit <a>/screenshare</a> for more info.

    <br /> <b>Note:</b> No sign-up required to use TeamViewer Meeting; we use this
    exclusively for group sessions.
  </p>
</details>

<details class="mydetails">
  <summary class="mysummary"><b>Q6</b> What subjects do you cover? </summary>

  <p>
    <b>Levels:</b> IB / AP / OSSD (9-12) / College & University <br /><br />

    <b>MATHEMATICS</b>&nbsp; Calculus • Trigonometry • Advanced Functions •
    Complex Numbers • Linear Algebra • Probability and Statistics &nbsp;&nbsp;<b
      >PHYSICS</b
    >
    &nbsp;&nbsp; Kinematics • Mechanics • Thermodynamics • Fluids • Electricity &
    Magnetism • Circuit Analysis • Waves • Optics • Atomic & Quantum Physics • Special
    Relativity &nbsp;&nbsp;<b>SPANISH</b> &nbsp;&nbsp; Pronunciation • Grammatical
    Rules • Practical Examples
  </p>
</details>

<details class="mydetails">
  <summary class="mysummary">
    <b>Q7</b> How are mock tests/ Mockowl sessions administered?
  </summary>
  <p>
    The student attends a live session where we implement Google Forms. Answer
    keys are released within an hour of completion. <i>
      Digitally-handwritten solution key available as a premium.</i
    > <br /><br />

    We are soon implementing a content-based subscription plan; see our sample
    quiz app on the <a href="https://www.brightowltutoring.com/">home page</a> for
    a preview.
  </p>
</details>

<details class="mydetails">
  <summary class="mysummary">
    <b>Q8</b> I am looking to refer a friend, do you offer any discounts based on
    referrals?
  </summary>
  <p>
    Great question! We absolutely welcome this initiative and are pleased to
    reward it; please visit our <a>/referrals</a> page. <br /><br />

    Alternatively <i>if</i> filling out an invoice-based <a>plan</a>, you will
    have a chance to input a referral.
  </p>
</details>

<details class="mydetails">
  <summary class="mysummary">
    <b>Q9 </b>Is it possible to access all my session content in one place?
  </summary>
  <p>
    Sure can! Secure a unique URL for $5/month while booking or <a
      >contact us directly</a
    >
    (<a href="https://www.brightowltutoring.com/url"> 💫 sample URL</a>).
  </p>
</details>

<style>
  details summary::-webkit-details-marker {
    display: none;
    /*outline:none;*/
  }

  .mydetails {
    border: 0px solid #eee;
    border-radius: 5%;
    padding: 0.5em 0.5em 0;
  }

  .mydetails:hover {
    background: #ddd;
  }

  .mysummary {
    font-weight: bold;
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
  }

  .mydetails[open] {
    padding: 0.5em;
    background: rgb(230, 255, 249);
  }

  .mydetails[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: 0.5em;
    background-color: rgb(89, 208, 174);
    outline: none;
  }

  .mydetails p {
    /*background-color: rgb(237, 252, 248); */
    padding: 4px;
    margin: 0;
    /*box-shadow: 1px 1px 2px #bbbbbb;*/
  }

  /*<p style="font-size:18px"> */
  details {
    @apply font-Nunito;
  }
</style>
