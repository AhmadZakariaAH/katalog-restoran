import $ from 'jquery';
import { spyOn } from 'jest-mock';
import '../src/scripts/components/add-review';
import RestaurantAPISource from '../src/scripts/data/restaurant-API-source';

describe('Add Review', () => {
  beforeEach(() => {
    document.body.innerHTML = '<add-review></add-review>';
  });

  it('the form display value should none in the first look', () => {
    expect($('#addReviewForm').css('display')).toEqual('none');
  });

  it('should show form when add review button has been clicked', () => {
    $('#addReviewButton').trigger('click');
    expect($('#addReviewForm').css('display')).toEqual('block');
  });

  it('should hide form when cancel review button has been clicked', () => {
    $('#addReviewButton').trigger('click');
    $('#reviewCancelButton').trigger('click');
    expect($('#addReviewForm').css('display')).toEqual('none');
  });

  it("should NOT be able to add review if the username OR user's review is empty", () => {
    const reviewMock = spyOn(RestaurantAPISource, 'postReview');
    $('#addReviewButton').trigger('click');
    $('#reviewPostButton').trigger('click');
    expect(reviewMock).toHaveBeenCalledTimes(0);
    reviewMock.mockClear();
    reviewMock.mockReset();
  });

  it("should be able to add review if the username AND user's review is NOT empty", () => {
    const reviewMock = spyOn(RestaurantAPISource, 'postReview');
    $('add-review').attr('id', 'id');
    $('#addReviewName').val('name');
    $('#addReviewText').val('text');
    $('#addReviewButton').trigger('click');
    $('#reviewPostButton').trigger('click');
    expect(reviewMock).toHaveBeenCalledTimes(1);
    reviewMock.mockClear();
    reviewMock.mockReset();
  });

  it('should be able to add review matching the user query', () => {
    const reviewMock = spyOn(RestaurantAPISource, 'postReview');
    $('add-review').attr('id', 'id');
    $('#addReviewName').val('name');
    $('#addReviewText').val('text');
    $('#addReviewButton').trigger('click');
    $('#reviewPostButton').trigger('click');
    expect(reviewMock).toHaveBeenCalledWith({
      id: 'id',
      name: 'name',
      review: 'text',
    });
    reviewMock.mockClear();
    reviewMock.mockReset();
  });
});
