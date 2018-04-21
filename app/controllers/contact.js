import Controller from '@ember/controller';
import {
  match,
  not,
  and,
  gte
} from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  message: '',
  emailAddress: '',

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: gte('message.length', 5),
  isValid: and('isValidEmail', 'isValidMessage'),
  isDisabled: not('isValid'),

  actions: {

    sendMessage() {
      alert('You\'re message has been sent!');
      this.set('responseMessage', 'You\'re message has been sent!');
      this.set('message', '');
      this.set('emailAddress', '');
    }
  }

});
