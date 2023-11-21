import { Link } from 'react-router-dom';

const About = () => (
  <div className="about">
    <div>
      <h2 className="p-title">Hello there!</h2>
      <p>
        Welcome to
        {' '}
        <Link to="/"><span className="li-title">Wander World</span></Link>
        <span className="li-title">Wander World</span>
        , a Web App designed to provide a
        web experience for exploring and analyzing numeric data, specifically
        focusing on country-related metrics. As part of my learning objectives,
        I successfully integrated various React features and best practices
        throughout the development process.
      </p>
    </div>

    <div>
      <h3 className="p-title">Learning Objectives Achieved: </h3>
      <ul>
        <li>
          <span className="li-title">React Components:</span>
          {' '}
          <span>
            I implemented React components to create a dynamic and interactive
            user interface, ensuring a smooth navigation experience.
          </span>
        </li>

        <li>
          <span className="li-title">React Router:</span>
          {' '}
          <span>
            Utilizing React Router, I established a single-page application
            (SPA) structure with unique routes for the homepage and detailed
            country pages.
          </span>
        </li>

        <li>
          <span className="li-title">React and Redux Integration:</span>
          {' '}
          <span>
            The project incorporates Redux for state management, allowing
            efficient storage and retrieval of data from the selected API.
          </span>
        </li>

        <li>
          <span className="li-title">Event Handling:</span>
          {' '}
          <span>
            User interactions, such as category item clicks, trigger seamless
            navigation between the homepage and detailed item pages.
          </span>
        </li>

        <li>
          <span className="li-title">Styling:</span>
          {' '}
          <span>
            Following design guidelines and utilizing React&apos;s styling
            capabilities, I crafted a visually appealing and responsive layout
            for a delightful user experience.
          </span>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="p-title">Project Features:</h3>

      <ul>
        <li>
          <span className="li-title">Data Retrieval:</span>
          {' '}
          <span>
            The app fetches numeric data about countries from the
            {' '}
            <a className="li-title" href="https://restcountries.com/v3.1/all">REST COUNTRIES API</a>
            ,
            allowing users to explore a list of metrics based on specified
            parameters.
          </span>
        </li>

        <li>
          <span className="li-title">Filtering Functionality:</span>
          {' '}
          <span>
            The homepage features a list of countries that can be filtered by
            continent, enhancing the user&apos;s ability to find
            relevant information.
          </span>
        </li>

        <li>
          <span className="li-title">Details Page:</span>
          {' '}
          <span>
            Clicking on a country leads to a details page, where the app
            displays data particular to that specific country.
          </span>
        </li>
      </ul>
    </div>

    <div className='thanks-note'>Thank you for taking the time to explore this project. Your interest is truly appreciated!</div>
  </div>
);

export default About;
