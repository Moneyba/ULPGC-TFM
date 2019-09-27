import {Rating} from './Rating';
import {RewardPoints} from './RewardPoints';

export class User {
    id?: string;
    phoneNumber?: string;
    name?: string;
    photo?: string;
    averageRating?: number;
    ratings?: Rating[];
    numberOfRatings?: number;
    points?: RewardPoints;
    carPlate?: string;
    isRated?: boolean;
}
