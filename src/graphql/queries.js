/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGuest = /* GraphQL */ `
  query getGuest($id: ID!) {
    getGuest(id: $id) {
        id
        signedUpBy
        firstName
        lastName
        foodPreferences
        attendingFriday
        attendingSaturday
        attendingSunday
        createdAt
        updatedAt
    }
  }
`;
export const listGuests = /* GraphQL */ `
  query listGuests(
    $filter: ModelGuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        signedUpBy
        firstName
        lastName
        foodPreferences
        attendingFriday
        attendingSaturday
        attendingSunday
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
