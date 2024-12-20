import { Skeleton } from '@mui/material'

const ItemPageSkeletons = () => (
  <>
    <div style={{ width: '100%', height: '100%' }}>
      <Skeleton variant='text' width='100%' />
      <Skeleton variant='rectangular' width={'100%'} sx={{ my: '1rem' }} />
      <Skeleton variant='rectangular' width={'100%'} sx={{ my: '1rem' }} />
      <Skeleton
        variant='rectangular'
        height={'50%'}
        width={'100%'}
        sx={{ my: '1rem' }}
      />
    </div>
  </>
)

export default ItemPageSkeletons
