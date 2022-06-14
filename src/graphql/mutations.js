/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGuest = /* GraphQL */ `
  mutation CreateGuest(
    $input: CreateGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    createGuest(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteGuest = /* GraphQL */ `
  mutation deleteGuest(
    $input: DeleteGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    deleteGuest(input: $input, condition: $condition) {
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
