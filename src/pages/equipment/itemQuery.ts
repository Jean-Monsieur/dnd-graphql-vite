import { gql } from '@apollo/client'

export const GET_EQUIPMENT = gql`
  query Equipment($index: String) {
    equipment(index: $index) {
      index
      name
      weight
      desc
      equipment_category {
        name
        index
      }
    }
  }
`
