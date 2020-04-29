import { ADD_EVENT } from '../Actions/actionTypes';

const INITIAL_STATE = {
    events:  [
        {
            name: 'Career Fair',
            description: 'Come and meet potential employers for life after college!',
            venue: 'Bud Walton',
            coordinator: 'John Doe',
            coordinatorEmail: 'jdoe@gmail.com',
            startTime: '11:00 AM',
            endTime: '5:00 PM',
            fee: 0
        },
        {
            name: 'Google comes to Campus',
            description: 'Info session with Google. Come meet Google employees and learn more about the company as a whole.',
            venue: 'J.B. Hunt',
            coordinator: 'James Smith',
            coordinatorEmail: 'jsmith@gmail.com',
            startTime: '4:00 PM',
            endTime: '6:00 PM',
            fee: 0
        },
        {
            name: 'Freshman Year Welcome Party',
            description: 'Come celebrate the start of your new life at the University of Arkansas!',
            venue: 'Union Mall',
            coordinator: 'John Doe',
            coordinatorEmail: 'jdoe@gmail.com',
            startTime: '3:00 PM',
            endTime: '6:00 PM',
            fee: 0
          },
          {
            name: 'Cardinal Nights',
            description: 'Come join us for free prizes, food, and good times!',
            venue: 'Union Mall',
            coordinator: 'Colby Crowne',
            coordinatorEmail: 'test@gmail.com',
            startTime: '7:00 PM',
            endTime: '11:00 PM',
            fee: 5
          },
      ],
};

const Events = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return { ...state, events: [...state.events, action.payload] }
        default:
          return state;
      }
}

export default Events;