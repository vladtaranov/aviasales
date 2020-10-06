import * as actionTypes from '../../store/actionTypes';
import { setSorting } from '../../actions/sorting';
import * as sorting from '../../constants/sorting';

describe('Sorting action creators', () => {
  it('Set sorting', () => {
    const newSorting = sorting.BY_SPEED_ASC;
    const expectedAction = {
      type: actionTypes.SET_SORTING,
      payload: newSorting
    };

    expect(setSorting(newSorting)).toEqual(expectedAction);
  });
});
