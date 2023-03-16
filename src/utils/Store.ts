import { ReviewRequestExtend } from "../models/review.model";

class Store {
  constructor() {}
  getListReviews() {
    return JSON.parse(localStorage.getItem("listReviews") || "[]").reverse();
    return [];
  }
  addReview(review: ReviewRequestExtend) {
    const listReviews = this.getListReviews();
    listReviews.push(review);
    localStorage.setItem("listReviews", JSON.stringify(listReviews));
  }
  editReview(review: any) {
    const listReviews = this.getListReviews();
    const listReviewsAfterEdit = listReviews.map((reviewItem: any) => {
      if (reviewItem.id === review.id) {
        return review;
      }
      return reviewItem;
    });
    localStorage.setItem("listReviews", JSON.stringify(listReviewsAfterEdit));
  }
  getDraft() {
    const listReviews: ReviewRequestExtend[] = this.getListReviews();
    return listReviews.find((item: ReviewRequestExtend) => item.isDraft);
  }
  getUser() {
    const userName = localStorage.getItem("isLogin") || "";
    return userName;
  }
  getMyReview() {
    const listReviews: ReviewRequestExtend[] = this.getListReviews();
    const currentUser = this.getUser();
    return listReviews.filter(
      (item: ReviewRequestExtend) => item.authorId === currentUser
    );
  }
}
const store = new Store();
export default store;
