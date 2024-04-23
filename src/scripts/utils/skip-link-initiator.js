const SkipLinkInitiator = {
  init({ skipLink, content }) {
    skipLink.attr('href', `#${content.attr('id')}`);
    skipLink.on('click', (event) => {
      event.preventDefault();
      content[0].focus();
    });
  },
};

export default SkipLinkInitiator;
