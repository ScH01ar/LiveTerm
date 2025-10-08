import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
📖 sumfetch
 -----------
ABOUT
 ${config.name}
 <u><a href="${config.blog_url}" target="_blank">my_blog</a></u>
 -----------
 CONTACT 
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
`;
};

export default sumfetch;
