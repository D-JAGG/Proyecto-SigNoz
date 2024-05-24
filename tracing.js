'use strict';

const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

// Configurar los diagnósticos de OpenTelemetry (opcional)
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);

// Configurar el proveedor y el exportador
const provider = new NodeTracerProvider({
  instrumentations: [getNodeAutoInstrumentations()],
});

const exporter = new OTLPTraceExporter({
  url: 'http://13.59.235.203:3301/v1/traces', // URL del colector de SigNoz
});

provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.register();

console.log('Tracing initialized');
