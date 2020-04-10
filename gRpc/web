/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./Subber_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ConnClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ConnPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyRequest,
 *   !proto.ConnResponse>}
 */
const methodDescriptor_Conn_StartStatusUpdates = new grpc.web.MethodDescriptor(
  '/Conn/StartStatusUpdates',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.EmptyRequest,
  proto.ConnResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ConnResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EmptyRequest,
 *   !proto.ConnResponse>}
 */
const methodInfo_Conn_StartStatusUpdates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ConnResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ConnResponse.deserializeBinary
);


/**
 * @param {!proto.EmptyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ConnResponse>}
 *     The XHR Node Readable Stream
 */
proto.ConnClient.prototype.startStatusUpdates =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Conn/StartStatusUpdates',
      request,
      metadata || {},
      methodDescriptor_Conn_StartStatusUpdates);
};


/**
 * @param {!proto.EmptyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ConnResponse>}
 *     The XHR Node Readable Stream
 */
proto.ConnPromiseClient.prototype.startStatusUpdates =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Conn/StartStatusUpdates',
      request,
      metadata || {},
      methodDescriptor_Conn_StartStatusUpdates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyRequest,
 *   !proto.StatusResponse>}
 */
const methodDescriptor_Conn_EndStatusUpdates = new grpc.web.MethodDescriptor(
  '/Conn/EndStatusUpdates',
  grpc.web.MethodType.UNARY,
  proto.EmptyRequest,
  proto.StatusResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StatusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EmptyRequest,
 *   !proto.StatusResponse>}
 */
const methodInfo_Conn_EndStatusUpdates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StatusResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StatusResponse.deserializeBinary
);


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ConnClient.prototype.endStatusUpdates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Conn/EndStatusUpdates',
      request,
      metadata || {},
      methodDescriptor_Conn_EndStatusUpdates,
      callback);
};


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StatusResponse>}
 *     A native promise that resolves to the response
 */
proto.ConnPromiseClient.prototype.endStatusUpdates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Conn/EndStatusUpdates',
      request,
      metadata || {},
      methodDescriptor_Conn_EndStatusUpdates);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.AirClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.AirPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyRequest,
 *   !proto.ValueResponse>}
 */
const methodDescriptor_Air_Info = new grpc.web.MethodDescriptor(
  '/Air/Info',
  grpc.web.MethodType.UNARY,
  proto.EmptyRequest,
  proto.ValueResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ValueResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EmptyRequest,
 *   !proto.ValueResponse>}
 */
const methodInfo_Air_Info = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ValueResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ValueResponse.deserializeBinary
);


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ValueResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ValueResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AirClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Air/Info',
      request,
      metadata || {},
      methodDescriptor_Air_Info,
      callback);
};


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ValueResponse>}
 *     A native promise that resolves to the response
 */
proto.AirPromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Air/Info',
      request,
      metadata || {},
      methodDescriptor_Air_Info);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyRequest,
 *   !proto.StartStopResponse>}
 */
const methodDescriptor_Air_ChargeStart = new grpc.web.MethodDescriptor(
  '/Air/ChargeStart',
  grpc.web.MethodType.UNARY,
  proto.EmptyRequest,
  proto.StartStopResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartStopResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EmptyRequest,
 *   !proto.StartStopResponse>}
 */
const methodInfo_Air_ChargeStart = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StartStopResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartStopResponse.deserializeBinary
);


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StartStopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StartStopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AirClient.prototype.chargeStart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Air/ChargeStart',
      request,
      metadata || {},
      methodDescriptor_Air_ChargeStart,
      callback);
};


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StartStopResponse>}
 *     A native promise that resolves to the response
 */
proto.AirPromiseClient.prototype.chargeStart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Air/ChargeStart',
      request,
      metadata || {},
      methodDescriptor_Air_ChargeStart);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyRequest,
 *   !proto.StartStopResponse>}
 */
const methodDescriptor_Air_ChargeStop = new grpc.web.MethodDescriptor(
  '/Air/ChargeStop',
  grpc.web.MethodType.UNARY,
  proto.EmptyRequest,
  proto.StartStopResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartStopResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EmptyRequest,
 *   !proto.StartStopResponse>}
 */
const methodInfo_Air_ChargeStop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StartStopResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartStopResponse.deserializeBinary
);


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StartStopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StartStopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AirClient.prototype.chargeStop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Air/ChargeStop',
      request,
      metadata || {},
      methodDescriptor_Air_ChargeStop,
      callback);
};


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StartStopResponse>}
 *     A native promise that resolves to the response
 */
proto.AirPromiseClient.prototype.chargeStop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Air/ChargeStop',
      request,
      metadata || {},
      methodDescriptor_Air_ChargeStop);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.DepthClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.DepthPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyRequest,
 *   !proto.ValueResponse>}
 */
const methodDescriptor_Depth_Info = new grpc.web.MethodDescriptor(
  '/Depth/Info',
  grpc.web.MethodType.UNARY,
  proto.EmptyRequest,
  proto.ValueResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ValueResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EmptyRequest,
 *   !proto.ValueResponse>}
 */
const methodInfo_Depth_Info = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ValueResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ValueResponse.deserializeBinary
);


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ValueResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ValueResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DepthClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Depth/Info',
      request,
      metadata || {},
      methodDescriptor_Depth_Info,
      callback);
};


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ValueResponse>}
 *     A native promise that resolves to the response
 */
proto.DepthPromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Depth/Info',
      request,
      metadata || {},
      methodDescriptor_Depth_Info);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BalastClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BalastPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyRequest,
 *   !proto.ValueResponse>}
 */
const methodDescriptor_Balast_Info = new grpc.web.MethodDescriptor(
  '/Balast/Info',
  grpc.web.MethodType.UNARY,
  proto.EmptyRequest,
  proto.ValueResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ValueResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EmptyRequest,
 *   !proto.ValueResponse>}
 */
const methodInfo_Balast_Info = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ValueResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ValueResponse.deserializeBinary
);


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ValueResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ValueResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BalastClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Balast/Info',
      request,
      metadata || {},
      methodDescriptor_Balast_Info,
      callback);
};


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ValueResponse>}
 *     A native promise that resolves to the response
 */
proto.BalastPromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Balast/Info',
      request,
      metadata || {},
      methodDescriptor_Balast_Info);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyRequest,
 *   !proto.StartStopResponse>}
 */
const methodDescriptor_Balast_BlowStart = new grpc.web.MethodDescriptor(
  '/Balast/BlowStart',
  grpc.web.MethodType.UNARY,
  proto.EmptyRequest,
  proto.StartStopResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartStopResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EmptyRequest,
 *   !proto.StartStopResponse>}
 */
const methodInfo_Balast_BlowStart = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StartStopResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartStopResponse.deserializeBinary
);


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StartStopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StartStopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BalastClient.prototype.blowStart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Balast/BlowStart',
      request,
      metadata || {},
      methodDescriptor_Balast_BlowStart,
      callback);
};


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StartStopResponse>}
 *     A native promise that resolves to the response
 */
proto.BalastPromiseClient.prototype.blowStart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Balast/BlowStart',
      request,
      metadata || {},
      methodDescriptor_Balast_BlowStart);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyRequest,
 *   !proto.StartStopResponse>}
 */
const methodDescriptor_Balast_BlowStop = new grpc.web.MethodDescriptor(
  '/Balast/BlowStop',
  grpc.web.MethodType.UNARY,
  proto.EmptyRequest,
  proto.StartStopResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartStopResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EmptyRequest,
 *   !proto.StartStopResponse>}
 */
const methodInfo_Balast_BlowStop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StartStopResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartStopResponse.deserializeBinary
);


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StartStopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StartStopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BalastClient.prototype.blowStop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Balast/BlowStop',
      request,
      metadata || {},
      methodDescriptor_Balast_BlowStop,
      callback);
};


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StartStopResponse>}
 *     A native promise that resolves to the response
 */
proto.BalastPromiseClient.prototype.blowStop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Balast/BlowStop',
      request,
      metadata || {},
      methodDescriptor_Balast_BlowStop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyRequest,
 *   !proto.StartStopResponse>}
 */
const methodDescriptor_Balast_FillStart = new grpc.web.MethodDescriptor(
  '/Balast/FillStart',
  grpc.web.MethodType.UNARY,
  proto.EmptyRequest,
  proto.StartStopResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartStopResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EmptyRequest,
 *   !proto.StartStopResponse>}
 */
const methodInfo_Balast_FillStart = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StartStopResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartStopResponse.deserializeBinary
);


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StartStopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StartStopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BalastClient.prototype.fillStart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Balast/FillStart',
      request,
      metadata || {},
      methodDescriptor_Balast_FillStart,
      callback);
};


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StartStopResponse>}
 *     A native promise that resolves to the response
 */
proto.BalastPromiseClient.prototype.fillStart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Balast/FillStart',
      request,
      metadata || {},
      methodDescriptor_Balast_FillStart);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyRequest,
 *   !proto.StartStopResponse>}
 */
const methodDescriptor_Balast_FillStop = new grpc.web.MethodDescriptor(
  '/Balast/FillStop',
  grpc.web.MethodType.UNARY,
  proto.EmptyRequest,
  proto.StartStopResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartStopResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EmptyRequest,
 *   !proto.StartStopResponse>}
 */
const methodInfo_Balast_FillStop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StartStopResponse,
  /**
   * @param {!proto.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartStopResponse.deserializeBinary
);


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StartStopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StartStopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BalastClient.prototype.fillStop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Balast/FillStop',
      request,
      metadata || {},
      methodDescriptor_Balast_FillStop,
      callback);
};


/**
 * @param {!proto.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StartStopResponse>}
 *     A native promise that resolves to the response
 */
proto.BalastPromiseClient.prototype.fillStop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Balast/FillStop',
      request,
      metadata || {},
      methodDescriptor_Balast_FillStop);
};


module.exports = proto;

