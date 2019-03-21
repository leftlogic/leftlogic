import Link from 'next/link';
import Quote from '../components/Quote';
import Layout from '../components/Layout';

export default () => (
  <Layout sidebars={['Upcoming', 'Newsletter']}>
    <h1>Professional Event Management</h1>
    <h4>
      At Left Logic, we know that many large organisations have in-house
      development teams. Sometimes it makes more sense to up-skill your own
      people rather than hiring agencies to develop for you.
    </h4>
    <p>
      Julie has been running events professionally for 15 years for a large
      range of clients, from corporate events, charities and independent events.
      Her roles has included sponsor liaison, stage management, supplier
      negotiation and much more.
    </p>
    <p>
      <a href="mailto:info@leftlogic.com?subject=Events+management">
        Get in touch today for help with your event
      </a>
    </p>
    <h2>Services</h2>

    <div className="clearfix" />
    <h2>Comments from past clients</h2>
    <Quote
      line="Thank you for always being there at the end of an email for all my logistical questions. And printing me stuff at 9pm? That's a level of service I would never have expected!"
      cite="Aaron Hodder ∙ Testbash speaker 2018"
    />
    <Quote
      line="Julie was an invaluable part of the Talent2018 festival team. Her calm and professional approach helped immensely. Julie was a safe pair of hands on the day of the event and her expertise was very useful in the planning stages. She's flexible, extremely capable and I highly recommend her."
      cite="Rifa Thorpe-Tracey ∙ SheSays Brighton curator"
    />
    <Quote
      line="Julie is a great freelancer events manager and has helped us out on numerous occasions. Incredibly knowledgable, super organised and a pleasure to work with, we've recommended her to a bunch of other event curators in the past, and will continue to do so."
      cite="Andy Budd ∙ Clearleft CEO"
    />
  </Layout>
);
