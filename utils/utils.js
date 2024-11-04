import { isEqual, keys, sortBy } from "lodash";

export const isDisabled = (requireFields, dirtyFields) => {
    return !isEqual(
        sortBy(keys(requireFields)),
        sortBy(keys(dirtyFields))
      )
}
