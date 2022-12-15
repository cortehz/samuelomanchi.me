import { socials } from '@components/Hero/Hero';
import Wrapper from '@components/Wrapper';
import Link from 'next/link';
import { links } from '@components/Header/Header';
import Input from '@components/Forms/Input';
import Button from '@components/Forms/Button';
import mailchimp, { lists, setConfig } from '@mailchimp/mailchimp_marketing';
import { useState } from 'react';

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_URL,
});

const Footer = () => {
  const run = async () => {
    try {
      const signup = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email.email,
          status: 'subscribed',
        }),
      });
      const response = await signup.json();

      setEmail({
        email: '',
        subcriptionResponse: response.message,
        error: false,
      });
    } catch (error) {
      setEmail({ ...email, subcriptionResponse: error, error: true });
    }
  };

  const [email, setEmail] = useState({
    email: '',
    subcriptionResponse: '',
    error: false,
  });

  return (
    <Wrapper>
      <footer className='footer-section'>
        <div className='footer-section-top'>
          <div className='brand-left'>
            <a href='/' className='brand'>
              <svg
                width='30'
                height='26'
                viewBox='0 0 30 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.798 17.104V16.854V15.342V15.092H15.048H16.84C17.9298 15.092 18.6012 14.8832 18.9433 14.5412C19.2944 14.1901 19.506 13.5208 19.506 12.45C19.506 11.362 19.2899 10.6922 18.9346 10.3501L18.9312 10.3468L18.9313 10.3468C18.5801 9.99562 17.9109 9.78397 16.84 9.78397H15.048H14.798V9.53397V8.02197V7.77197H15.048H16.84C18.3861 7.77197 19.5788 8.1396 20.3643 8.92468C20.3645 8.92485 20.3646 8.92502 20.3648 8.9252L20.188 9.10197C20.908 9.81397 21.268 10.93 21.268 12.45C21.268 13.962 20.908 15.074 20.188 15.786L14.798 17.104ZM14.798 17.104H15.048H16.84C18.3927 17.104 19.5862 16.741 20.3643 15.9632L14.798 17.104ZM21.2291 4.65171C21.1295 3.3965 20.7248 2.43202 19.9775 1.80712C19.2426 1.17783 18.1786 0.883972 16.828 0.883972H15.048H14.798V1.13397V2.64597V2.89597H15.048H16.828C17.7073 2.89597 18.287 3.04734 18.6208 3.30101L18.6208 3.30103L18.6233 3.30293C18.9394 3.53682 19.1575 3.9861 19.2189 4.73052L19.2188 4.73053L19.2194 4.7357C19.2476 5.00842 19.3399 5.24834 19.514 5.43331L19.5139 5.43339L19.5193 5.43875C19.7064 5.62586 19.9573 5.70397 20.236 5.70397C20.5303 5.70397 20.7934 5.62213 20.9888 5.42675L20.9889 5.42682L20.9938 5.42163C21.1897 5.2142 21.2579 4.94569 21.2291 4.65171ZM21.2291 4.65171C21.2291 4.65257 21.2292 4.65343 21.2293 4.6543L20.98 4.67397M21.2291 4.65171C21.229 4.65084 21.2289 4.64997 21.2288 4.6491L20.98 4.67397M20.98 4.67397C21.004 4.91397 20.948 5.10597 20.812 5.24997L16.828 1.13397C18.148 1.13397 19.144 1.42197 19.816 1.99797C20.496 2.56597 20.884 3.45797 20.98 4.67397ZM6.93459 17.116H7.04801H7.29801V17.1098C8.92206 17.055 10.1683 16.635 10.9892 15.8064C11.8792 14.9161 12.298 13.5423 12.298 11.742V6.258C12.298 4.45067 11.8797 3.07605 10.9888 2.19322C10.1679 1.36487 8.92182 0.945032 7.29801 0.890199V0.883997H7.04801H6.124C6.12036 0.883997 6.11672 0.883999 6.11308 0.884002H6.00001H5.75001V0.890194C4.12591 0.945036 2.87966 1.36501 2.05878 2.19367C1.16878 3.08398 0.75 4.45773 0.75 6.258V11.742C0.75 13.5494 1.16837 14.924 2.05925 15.8068C2.88014 16.6351 4.12622 17.055 5.75001 17.1098V17.116H6.00001H6.92402C6.92755 17.116 6.93107 17.116 6.93459 17.116ZM4.08776 3.21123C4.56142 3.00741 5.23105 2.89691 6.11307 2.896H6.92402C7.81125 2.896 8.48354 3.01056 8.95816 3.22231L8.95814 3.22235L8.96239 3.22415C9.43071 3.42283 9.7592 3.75132 9.95788 4.21964L9.95786 4.21965L9.95914 4.22257C10.1717 4.70623 10.286 5.37946 10.286 6.258V11.742C10.286 12.6205 10.1717 13.2938 9.95914 13.7774L9.95912 13.7774L9.95788 13.7804C9.75903 14.2491 9.42984 14.5822 8.96025 14.7888C8.48661 14.9926 7.81702 15.1031 6.93507 15.104H6.124C5.23677 15.104 4.56448 14.9894 4.08986 14.7777L4.08988 14.7776L4.08564 14.7759C3.61732 14.5772 3.28883 14.2487 3.09015 13.7804L3.09016 13.7804L3.08888 13.7774C2.87636 13.2938 2.762 12.6205 2.762 11.742V6.258C2.762 5.37945 2.87636 4.70622 3.08888 4.22257L3.0889 4.22257L3.09015 4.21963C3.28899 3.75093 3.61817 3.41778 4.08776 3.21123Z'
                  fill='#C08B8B'
                  stroke='#C08B8B'
                  strokeWidth='1'
                />
              </svg>
            </a>
            <p>
              I write sometimes about web development. <br />
              Get notified when next I make a post.
            </p>
            <form
              className='subscribe-form'
              onSubmit={(e) => {
                e.preventDefault();
                run();
              }}
            >
              <div className={'inputContainer'}>
                <Input
                  type={'email'}
                  placeholder={'Please enter your email address'}
                  value={email.email}
                  onChange={(e) =>
                    setEmail({ ...email, email: e.target.value })
                  }
                  required
                />
              </div>

              <Button label='Notify me' mode='primary' type={'submit'} />
            </form>
            <p style={{ color: email.error ? 'red' : 'green' }}>
              {email?.subcriptionResponse}
            </p>
          </div>

          <div className='footer-links-right'>
            <h5>Socials</h5>
            <ul className='socials'>
              {socials.map(({ link, icon, socialName }) => (
                <li key={link}>
                  <a
                    href={link}
                    target='_blanck'
                    aria-label={`Visit my profile on ${socialName}`}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
            <h5>Say hi</h5>
            <a href='mailto:hello@samuelomanchi.me' className='email'>
              hello@samuelomanchi.me
            </a>
            <ul className='footer-links'>
              {links.map(({ link, linkDescription }, index) => {
                return (
                  <li key={link} className='footer-links'>
                    {index !== 0 && (
                      <svg
                        width='4'
                        height='5'
                        viewBox='0 0 4 5'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='2' cy='2.35712' r='2' fill='#D9D9D9' />
                      </svg>
                    )}
                    <Link href={link}>
                      <a href={link}>{linkDescription}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <p>
          <svg
            width='12'
            height='13'
            viewBox='0 0 12 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 0.714355C2.68594 0.714355 0 3.40029 0 6.71436C0 10.0284 2.68594 12.7144 6 12.7144C9.31406 12.7144 12 10.0284 12 6.71436C12 3.40029 9.31406 0.714355 6 0.714355ZM4.66875 8.04092C5.01891 8.39389 5.48438 8.58889 5.97867 8.58889C6.47227 8.58889 6.93773 8.39407 7.28719 8.04092C7.50691 7.82119 7.86211 7.81899 8.08336 8.03726C8.30381 8.25626 8.30529 8.61218 8.08702 8.83343C7.52452 9.40108 6.77569 9.71374 5.97882 9.71374C5.18265 9.71374 4.43311 9.40108 3.87061 8.83343C2.71186 7.66437 2.71186 5.76312 3.87061 4.59359C4.43311 4.02593 5.18265 3.71327 5.97882 3.71327C6.77569 3.71327 7.52452 4.02593 8.08702 4.59359C8.30527 4.81479 8.30382 5.17062 8.08336 5.38976C7.86216 5.60876 7.50703 5.6051 7.28719 5.3861C6.93773 5.03313 6.47227 4.83813 5.97867 4.83813C5.48438 4.83813 5.01891 5.03294 4.66875 5.3861C3.94453 6.11904 3.94453 7.30967 4.66875 8.04092Z'
              fill='#C08B8B'
            />
          </svg>{' '}
          2017 - {new Date().getFullYear()}
        </p>
      </footer>
    </Wrapper>
  );
};

export default Footer;
