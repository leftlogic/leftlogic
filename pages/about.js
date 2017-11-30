import Layout from '../components/Layout';
import Team from '../components/Team';
import team from '../data/team.json';

const Page = () => {
  return (
    <Layout title="About Left Logic" sidebars={['Newsletter', 'Terminal']}>
      <h1>About Left Logic</h1>
      <h4>
        At Left Logic we are constantly engaged in experimentation, pushing the
        code to improve stability and efficiency, as well creating completely
        new possibilities.
      </h4>

      <div id="about" className="about">
        {team
          .filter(member => !member.former)
          .map(member => <Team key={member.name} {...member} />)}
      </div>

      <div id="formerly" className="about">
        <h2>Former Lefties</h2>
        {team
          .filter(member => member.former)
          .map(member => <Team key={member.name} {...member} />)}
      </div>
    </Layout>
  );
};

export default Page;
