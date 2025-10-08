import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
📋 sumfetch
 -----------
🔍 ABOUT
😃 ${config.name}
🧩 I used to compete as a crypto player for the <u><a href="https://dlut-sss.github.io" target="_blank" rel="noopener noreferrer">Scr1w</a></u> and <u><a href="https://wm-team.cn/" target="_blank" rel="noopener noreferrer">W&amp;M</a></u> teams.
🎓 Now I am a master's student at USTC.
👉🏻 <u><a href="${config.blog_url}" target="_blank">my_blog</a></u>
 -----------
🌐 CONTACT 
✉️ <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
🔗 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
`;
};

export default sumfetch;
