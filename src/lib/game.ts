export type GameType = {
  _id: string
  _type: 'article'
  _createdAt: string
  _updatedAt: string
  name: string
  slug: {
    _type: 'slug'
    current: string
  }
  title: string
  seo: {
    title: string
    description: string
    image: {
      asset: {
        _ref: string
      }
    }
  }
  icon: {
    asset: {
      _ref: string
    }
  }
  intro: string
  about: string
  generalInfo: {
    tableHeading: string
    tableData: string
  }[]
  tags: string[]
  brandedCoverImage: {
    asset: {
      _ref: string
    }
  }
  plainCoverImage: {
    asset: {
      _ref: string
    }
  }
  screenshots: {
    asset: {
      _ref: string
    }
  }[]
  ratings: {
    visuals: number
    sound: number
    gameplay: number
    updates: number
    optimization: number
  }
}
