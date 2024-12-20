import { gql } from '@apollo/client'

export const GET_MAGIC_ITEM = gql`
  query Query($index: String) {
    magicItem(index: $index) {
      index
      name
      image
      desc
      rarity
      equipment_category {
        index
        name
      }
    }
  }
`
