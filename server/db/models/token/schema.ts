import { SchemaDefinition, SchemaTypes } from 'mongoose';

import { tokenTypes } from '../../static/token';
import { Util } from '../../../core/util/util';

export const TokenSchema: SchemaDefinition = {
  user: {
    type: String
  },
  data: {
    type: SchemaTypes.Mixed,
    default: null
  },
  token: {
    type: String,
    default: function () {
      return Util.generateToken();
    }
  },
  type: {
    type: String,
    enum: tokenTypes,
    default: tokenTypes[1] // admin
  },
  expireAt: {
    type: Date,
    default: function () {
      // default expire at 20 minutes
      return new Date(Date.now() + 20 * 60 * 1000);
    }
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  deletedAt: {
    type: Date,
    default: null
  },
  deletedBy: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: null
  },
  createdBy: {
    type: String,
    default: null
  },
  updatedAt: {
    type: Date,
    default: null
  },
  updatedBy: {
    type: String,
    default: null
  }
};
