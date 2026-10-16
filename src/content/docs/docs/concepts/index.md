---
title: Concepts
description: The core model behind Tritolem — providers, customers, control plane, and agents.
---

:::note
Status: Design. These concepts describe the intended product direction and
are not yet implemented.
:::

Tritolem lets a provider define a managed service once and offer it, under
its control, to many customers across many Kubernetes clusters.

- **[Control plane](/docs/concepts/control-plane/)** — the central component
  that holds the desired state and exposes the API and CLI.
- **[Clusters & agents](/docs/concepts/clusters-and-agents/)** — how existing
  Kubernetes clusters connect and stay operational on their own.
- **[Service lifecycle](/docs/concepts/service-lifecycle/)** — how a service
  goes from extension to offering to a running, isolated instance.
