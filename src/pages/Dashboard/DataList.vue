<template>
    <base-table :data="data"
                thead-classes="text-primary">
      <template slot-scope="{row}">
        <td class="td-actions text-right">
          <base-button type="link" aria-label="edit button" disabled>
            <i class="tim-icons icon-double-right"></i>
          </base-button>
        </td>
        <td>
          <p>{{row}}</p>
        </td>
      </template>
    </base-table>
</template>
<script>
  import {BaseTable} from '@/components'
  export default {
    components: {
      BaseTable
    },
    props: {
      data:{
        type: Array,
        default: () => [],
        description: 'data in list'
      }
    }
  }
</script>
<style>
</style>
