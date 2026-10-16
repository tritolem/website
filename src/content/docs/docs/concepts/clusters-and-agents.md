---
title: Clusters & agents
description: How Tritolem connects existing Kubernetes clusters and keeps them operational without a constant control plane connection.
---

:::note
Status: Design. Not yet implemented.
:::

Tritolem connects **existing** Kubernetes clusters; it does not provision
clusters itself. Onboarding supports an automatic bootstrap using a provided
kubeconfig, or manual agent installation as an alternative.

An agent runs on each connected workload cluster and pulls its assigned
desired state rather than waiting for the control plane to push changes. If
the agent cannot reach the control plane:

- Already-running service instances keep working.
- Local health checks and reconciliation continue.
- New centrally authorized changes (new deployments, deletions, size or
  configuration changes, and updates) pause until the connection returns.

A cluster can be set to **draining**: no new service instances are placed on
it, but existing instances keep running. Draining is not an automatic
evacuation of a cluster's workloads.
