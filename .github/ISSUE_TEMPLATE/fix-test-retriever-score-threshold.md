---
name: Fix test_retriever score_threshold assertion
about: Test fails because it doesn't expect the score_threshold parameter
title: 'Fix: test_retrieve_formats_ranked_results assertion missing score_threshold'
labels: bug, tests
assignees: ''

---

## Description

`test_retrieve_formats_ranked_results` in `tests/test_retriever.py` is failing because it doesn't account for the `score_threshold=0.0` parameter that `retriever.py` now passes to `query_points()`.

## Root Cause

Commit `1704edf` (centralize model and environment configuration #35) added `score_threshold=QDRANT_SIMILARITY_THRESHOLD` to the `query_points()` call in `retriever.py`, but the existing test (`ded6697`) was not updated to expect this new parameter.

## Error

```
Expected: query_points(collection_name='devwhisper', query=[0.1, 0.2, 0.3], limit=2)
  Actual: query_points(collection_name='devwhisper', query=[0.1, 0.2, 0.3], limit=2, score_threshold=0.0)
```

## Fix

Add `score_threshold=0.0` to the `assert_called_once_with` call in `tests/test_retriever.py:43`.
