import Link from 'next/link';
import Quote from '../../components/Quote';
import Layout from '../../components/Layout';
import training from '../../data/training.json';

export default () => (
  <Layout sidebars={['Upcoming', 'Newsletter']}>
    <h1>Professional Training</h1>
    <h4>
      At Left Logic, we know that many large organisations have in-house
      development teams. Sometimes it makes more sense to up-skill your own
      people rather than hiring agencies to develop for you.
    </h4>
    <p>
      Left Logic has packaged some of our expertise. We now offer specific
      training workshops to in-house teams wishing to brush up on their
      development skills, from latest HTML5 technology, mobile development and
      browser developer tools.
    </p>
    <p>
      Left Logic also offers a tailored consultancy service.{' '}
      <Link href="/contact?message=Training enquiry">
        <a>Contact us for more information</a>
      </Link>
      .
    </p>
    <h2>Workshops</h2>
    <ul id="training">
      {training.map(({ slug, title }) => (
        <li key={slug} id={slug}>
          <div className="background">
            <Link href={`/training/${slug}`}>
              <a>
                <span>{title}</span>
              </a>
            </Link>
          </div>
        </li>
      ))}
    </ul>
    <div className="clearfix" />
    <h2>Comments from workshop delegates</h2>
    <Quote
      line="I thought content level was pitched just right. Very relaxed and friendly atmosphere. A great day."
      cite="George Hedges, Sussex Downs College"
    />
    <Quote
      line="Remy is a rare type - a developer who understand designers and has a passion for how things look. He presented some complex but elegant jQuery concepts in a straightforward way."
      cite="Andy Birchwood"
    />
  </Layout>
);
