export default function() {
  this.get('/staff-members/:id', () => {
    return {
      '@type': 'StaffMember',
      identity: { id: 'urn:x-memento:StaffMember:lJFBHAXTmAMXVkyx1F4i-Q' },
      branchUser: {
        '@type': 'User',
        identity: { id: 'urn:x-memento:User:dVEL1rUFIqdpmhXZL_MeAQ' },
        name: 'Dave Grohl'
      }
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
