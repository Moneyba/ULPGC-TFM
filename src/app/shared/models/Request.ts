import {Ride} from './Ride';
import {State} from '../ui.utils';

export class Request {
    id?: string;
    userId: string;
    dateTime: Date;
    ride: Ride;
    state: State;
}
